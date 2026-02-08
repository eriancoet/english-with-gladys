import { CreditCard, ShieldCheck, Lock, CheckCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Status = "idle" | "sending" | "success" | "error";
type PlanValue = "free" | "35" | "300" | "group20" | "exam40";

// ✅ Replace with your PayPal email
const PAYPAL_EMAIL = "YOUR_PAYPAL_EMAIL";

// ✅ Replace with your real site URLs (optional but recommended)
const RETURN_URL = "https://gladys-english.netlify.app/payment-success";
const CANCEL_URL = "https://gladys-english.netlify.app/checkout";

const buildPayPalLink = (itemName: string, amount: number) => {
  return (
    "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick" +
    `&business=${encodeURIComponent(PAYPAL_EMAIL)}` +
    `&item_name=${encodeURIComponent(itemName)}` +
    `&amount=${encodeURIComponent(amount.toFixed(2))}` +
    `&currency_code=USD` +
    `&return=${encodeURIComponent(RETURN_URL)}` +
    `&cancel_return=${encodeURIComponent(CANCEL_URL)}`
  );
};

const PAYPAL_FIXED: Record<"35" | "300", string> = {
  "35": buildPayPalLink("Individual Lesson", 35),
  "300": buildPayPalLink("10 Lesson Package", 300),
};

export function CheckoutPage() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    plan: PlanValue;
    hours: string; // for hourly options
    groupSize: string; // for group classes
  }>({
    name: "",
    email: "",
    plan: "free",
    hours: "1",
    groupSize: "3",
  });

  const [status, setStatus] = useState<Status>("idle");

  // Auto-select plan from URL: /checkout?plan=group20
  useEffect(() => {
    const p = searchParams.get("plan") as PlanValue | null;
    if (!p) return;

    const allowed: PlanValue[] = ["free", "35", "300", "group20", "exam40"];
    if (!allowed.includes(p)) return;

    setFormData((prev) => ({
      ...prev,
      plan: p,
      hours: p === "300" || p === "free" ? "1" : prev.hours || "1",
      groupSize: p === "group20" ? prev.groupSize || "3" : prev.groupSize,
    }));
  }, [searchParams]);

  const planDetails = useMemo(() => {
    switch (formData.plan) {
      case "35":
        return { label: "Individual Lesson – $35/hour", base: 35, type: "hourly" as const };
      case "300":
        return { label: "10-Lesson Package – $300 total", base: 300, type: "fixed" as const };
      case "group20":
        return { label: "Group Class – $20/hour per person", base: 20, type: "group" as const };
      case "exam40":
        return { label: "Exam Preparation – $40/hour", base: 40, type: "hourly" as const };
      default:
        return { label: "Free Trial – $0", base: 0, type: "free" as const };
    }
  }, [formData.plan]);

  const total = useMemo(() => {
    const hours = Math.max(1, Number(formData.hours || 1));
    const groupSize = Math.max(1, Number(formData.groupSize || 1));

    if (planDetails.type === "fixed") return planDetails.base;
    if (planDetails.type === "hourly") return planDetails.base * hours;
    if (planDetails.type === "group") return planDetails.base * hours * groupSize;
    return 0;
  }, [planDetails, formData.hours, formData.groupSize]);

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ FIXED: "const", not "cconst"
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "telf-checkout",
          name: formData.name,
          email: formData.email,
          plan: formData.plan,
          hours: formData.hours,
          groupSize: formData.groupSize,
          plan_label: planDetails.label,
          total_usd: String(total),
        }),
      });

      setStatus("success");

      // ✅ FREE: redirect to thank-you (no PayPal)
      if (formData.plan === "free") {
        window.location.href = "/thank-you-free";
        return;
      }

      // ✅ Paid fixed plans
      if (formData.plan === "35" || formData.plan === "300") {
        window.location.href = PAYPAL_FIXED[formData.plan];
        return;
      }

      // ✅ Paid variable plans
      if (formData.plan === "group20") {
        const item = `Group Class (${formData.groupSize} people, ${formData.hours} hour(s))`;
        window.location.href = buildPayPalLink(item, total);
        return;
      }

      if (formData.plan === "exam40") {
        const item = `Exam Preparation (${formData.hours} hour(s))`;
        window.location.href = buildPayPalLink(item, total);
        return;
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center mb-4">Checkout</h1>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Enter your details to continue. This page is only linked from Pricing.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="mb-6">Your Details</h2>

              {status === "success" && (
                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5" size={18} />
                    <div>
                      <div className="font-medium">Submitted!</div>
                      <div className="text-sm">
                        We received your details. Redirecting you to the next step...
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <form
                name="telf-checkout"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="telf-checkout" />
                <input type="hidden" name="bot-field" />

                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Select an Option *</label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="free">Free Trial – $0</option>
                    <option value="35">Individual Lesson – $35/hour</option>
                    <option value="300">10-Lesson Package – $300 total</option>
                    <option value="group20">Group Class – $20/hour per person</option>
                    <option value="exam40">Exam Preparation – $40/hour</option>
                  </select>
                </div>

                {/* Hours for hourly + group */}
                {(planDetails.type === "hourly" || planDetails.type === "group") && (
                  <div>
                    <label className="block text-gray-700 mb-2">How many hours? *</label>
                    <select
                      name="hours"
                      value={formData.hours}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="1">1 hour</option>
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                      <option value="4">4 hours</option>
                    </select>
                  </div>
                )}

                {/* Group size only for group */}
                {planDetails.type === "group" && (
                  <div>
                    <label className="block text-gray-700 mb-2">Group size (people) *</label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5">5 people</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-2">Group classes are priced per person.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Submitting..." : "Continue"}
                </button>

                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <Lock size={14} /> We only use your info for booking and payment records.
                </p>
              </form>
            </div>

            {/* Summary */}
            <div>
              <h2 className="mb-6">Summary</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Selected</h3>
                    <p className="text-gray-600">{planDetails.label}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Estimated total</h3>
                    <p className="text-gray-600">${total} USD</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Private page</h3>
                    <p className="text-gray-600">Not listed in navigation — only accessible from Pricing.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="mb-2">Next step</h3>
                <p className="text-sm text-gray-600">
                  After submission, you’ll be redirected to payment (paid plans) or a thank-you page (free).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
