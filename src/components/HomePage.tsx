import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <p className="text-blue-600 font-medium mb-3">Welcome to</p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                English with Gladys
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                Master English with personalized online lessons from a certified TEFL instructor.
                Improve your speaking, writing, and comprehension with a friendly, structured plan.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
                >
                  Book a Free Trial Class
                </Link>

                <Link
                  to="/pricing"
                  className="inline-flex justify-center items-center bg-white text-gray-900 px-8 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors font-medium cursor-pointer"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 className="text-blue-600" size={18} />
                <span>30-minute trial • No commitment • Online worldwide</span>
              </div>
            </div>

            {/* Video */}
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Introduction to English Classes"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* subtle caption like a “card” */}
              <div className="mt-4 bg-white rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600 shadow-sm">
                Watch a quick introduction to how lessons work and what to expect.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Why Choose My Classes?
            </h2>
            <p className="text-gray-600 text-lg">
              Simple, supportive lessons designed around your goals—with clear progress and confidence-building practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Certified TEFL Teacher</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn with structured, proven methods—tailored to your level and goals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose times that fit your routine—morning, afternoon, or evening.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personalized Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Lessons built around your goals: conversation, business English, or exam prep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
            Ready to Start Your English Learning Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Book a free 30-minute trial class to see if my teaching style is right for you.
          </p>

          <Link
            to="/contact"
            className="inline-flex justify-center items-center bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium cursor-pointer"
          >
            Schedule Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
