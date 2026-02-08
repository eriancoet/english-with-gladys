import { ImageWithFallback } from "./figma/ImageWithFallback";
import gladysImg from "../assets/gladys.jpg"; // adjust path if needed

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center mb-4">About Me</h1>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Your guide to mastering the English language
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImageWithFallback
                src={gladysImg}
                alt="Gladys Nontobeko Mashego - English Teacher"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="mb-6">Meet Gladys Nontobeko Mashego</h2>
              <p className="text-gray-600 mb-4">
                Hello! I'm Gladys Nontobeko Mashego, a certified TEFL (Teaching English as a Foreign Language) instructor with over 8 years of experience helping students from around the world achieve their English language goals.
              </p>
              <p className="text-gray-600 mb-4">
                I hold a TEFL certification and a Bachelor's degree in English Literature. My passion for teaching comes from seeing my students grow in confidence as they master new skills and reach their personal and professional objectives.
              </p>
              <p className="text-gray-600 mb-4">
                I've worked with students of all levels - from complete beginners to advanced learners preparing for international exams. My teaching approach focuses on practical communication skills while building a strong foundation in grammar and vocabulary.
              </p>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <h2 className="text-center mb-8">My Teaching Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="mb-3 text-blue-600">Student-Centered</h3>
                <p className="text-gray-600">
                  Every student is unique. I design personalized lessons that match your learning style, interests, and goals.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-blue-600">Practical & Engaging</h3>
                <p className="text-gray-600">
                  Learning should be fun! I use real-world scenarios, interactive activities, and engaging materials to keep you motivated.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-blue-600">Results-Focused</h3>
                <p className="text-gray-600">
                  I track your progress and celebrate your achievements. Together, we'll set clear goals and work systematically to reach them.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <h2 className="text-center mb-8">Qualifications & Experience</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">TEFL Certified</h3>
                  <p className="text-gray-600">120-hour TEFL certification with distinction</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">University Degree</h3>
                  <p className="text-gray-600">BA in English Literature</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">8+ Years Experience</h3>
                  <p className="text-gray-600">Teaching students from 30+ countries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">Exam Specialist</h3>
                  <p className="text-gray-600">IELTS, TOEFL, and Cambridge exam preparation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}