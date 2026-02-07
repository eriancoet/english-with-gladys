import { Video, Users, BookOpen, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ClassesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center mb-4">Online English Classes</h1>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Flexible, personalized online lessons designed to help you achieve your English language goals
          </p>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Choose Your Learning Path</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="text-blue-600" size={24} />
              </div>
              <h3 className="mb-3">One-on-One Classes</h3>
              <p className="text-gray-600">
                Private lessons tailored specifically to your needs and learning pace.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="mb-3">Group Classes</h3>
              <p className="text-gray-600">
                Learn with others in small groups of 3-5 students at similar levels.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h3 className="mb-3">Business English</h3>
              <p className="text-gray-600">
                Professional English for presentations, meetings, and workplace communication.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="mb-3">Exam Preparation</h3>
              <p className="text-gray-600">
                Focused preparation for IELTS, TOEFL, Cambridge, and other exams.
              </p>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <h2 className="text-center mb-8">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">Speaking & Pronunciation</h3>
                  <p className="text-gray-600">Build confidence in speaking with proper pronunciation and natural fluency</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">Listening Comprehension</h3>
                  <p className="text-gray-600">Improve your ability to understand native speakers in various contexts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">Reading & Writing</h3>
                  <p className="text-gray-600">Develop strong reading skills and write clearly and effectively</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">Grammar & Vocabulary</h3>
                  <p className="text-gray-600">Master essential grammar rules and expand your vocabulary</p>
                </div>
              </div>
            </div>
          </div>

          {/* How Classes Work */}
          <div>
            <h2 className="text-center mb-12">How Online Classes Work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  1
                </div>
                <h3 className="mb-3">Book Your Class</h3>
                <p className="text-gray-600">
                  Choose a time that works for you from available slots in my calendar.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  2
                </div>
                <h3 className="mb-3">Join Online</h3>
                <p className="text-gray-600">
                  Connect via Zoom or Skype from anywhere in the world - all you need is an internet connection.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  3
                </div>
                <h3 className="mb-3">Learn & Improve</h3>
                <p className="text-gray-600">
                  Interactive lessons with personalized materials, homework, and ongoing feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Book your free 30-minute trial class today and experience the difference personalized teaching can make!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Book Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
