import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center mb-4">Pricing & Packages</h1>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Affordable, flexible pricing options to suit every budget and learning goal
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Trial Package */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <div className="text-center mb-6">
                <h3 className="mb-2">Trial Class</h3>
                <div className="mb-4">
                  <span className="text-4xl">$0</span>
                </div>
                <p className="text-gray-600">30-minute session</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Free 30-minute trial lesson</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Level assessment</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Personalized learning plan</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">No commitment required</span>
                </li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Book Trial
              </Link>
            </div>

            {/* Individual Lessons */}
            <div className="bg-white border-2 border-blue-600 rounded-lg p-8 relative shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="mb-2">Individual Lessons</h3>
                <div className="mb-4">
                  <span className="text-4xl">$35</span>
                  <span className="text-gray-600">/hour</span>
                </div>
                <p className="text-gray-600">60-minute one-on-one</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Fully personalized lessons</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Custom materials & homework</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Progress tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Email support</span>
                </li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Get Started
              </Link>
            </div>

            {/* Package Deal */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <div className="text-center mb-6">
                <h3 className="mb-2">10-Lesson Package</h3>
                <div className="mb-2">
                  <span className="text-4xl">$30</span>
                  <span className="text-gray-600">/hour</span>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-green-600">Save $50!</span>
                </div>
                <p className="text-gray-600">Best value - $300 total</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">10 hours of lessons</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">All Individual Lesson features</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Valid for 3 months</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Priority scheduling</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Bonus study materials</span>
                </li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Buy Package
              </Link>
            </div>
          </div>

          {/* Additional Options */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <h2 className="text-center mb-8">Additional Options</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6">
                <h3 className="mb-3">Group Classes</h3>
                <div className="mb-4">
                  <span className="text-3xl text-blue-600">$20</span>
                  <span className="text-gray-600">/hour per person</span>
                </div>

                <p className="text-gray-600 mb-4">
                  Small groups of 3-5 students at similar levels. Great for making friends while learning!
                </p>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="text-blue-600 mr-2" size={16} />
                    Interactive group activities
                  </li>
                  <li className="flex items-center">
                    <Check className="text-blue-600 mr-2" size={16} />
                    Practice with peers
                  </li>
                  <li className="flex items-center">
                    <Check className="text-blue-600 mr-2" size={16} />
                    Scheduled weekly sessions
                  </li>
                </ul>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex w-full justify-center items-center bg-white text-gray-900 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors font-medium cursor-pointer"
                  >
                    Ask About Group Classes
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="mb-3">Exam Preparation</h3>
                <div className="mb-4">
                  <span className="text-3xl text-blue-600">$40</span>
                  <span className="text-gray-600">/hour</span>
                </div>

                <p className="text-gray-600 mb-4">
                  Intensive preparation for IELTS, TOEFL, Cambridge exams, and other certifications.
                </p>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="text-blue-600 mr-2" size={16} />
                    Exam-specific strategies
                  </li>
                  <li className="flex items-center">
                    <Check className="text-blue-600 mr-2" size={16} />
                    Practice tests & feedback
                  </li>
                  <li className="flex items-center">
                    <Check className="text-blue-600 mr-2" size={16} />
                    Score improvement guarantee
                  </li>
                </ul>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex w-full justify-center items-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
                  >
                    Start Exam Prep
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-6">Payment Information</h2>
            <p className="text-gray-600 mb-4">
              I accept payment via PayPal, bank transfer, or credit card. All prices are in USD.
            </p>
            <p className="text-gray-600 mb-4">
              Cancellation policy: Please provide at least 24 hours notice to reschedule or receive a refund.
            </p>
            <p className="text-gray-600">
              Have questions about which package is right for you?{" "}
              <Link to="/contact" className="text-blue-600 hover:underline cursor-pointer">
                Get in touch
              </Link>{" "}
              and I&apos;ll help you choose!
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
