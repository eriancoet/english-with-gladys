import { useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import gladysImg from "../assets/gladys.jpg";

export function AboutPage() {
  useEffect(() => {
    const img = new Image();
    img.src = gladysImg;
  }, []);

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
                loading="eager"
              />
            </div>

            <div>
              <h2 className="mb-6">Meet Gladys Nontobeko Mashego</h2>
              <p className="text-gray-600 mb-4">
                Hello! I'm Gladys Nontobeko Mashego, a certified TEFL (Teaching English
                as a Foreign Language) instructor with over 8 years of experience helping
                students from around the world achieve their English language goals.
              </p>
              <p className="text-gray-600 mb-4">
                I hold a TEFL certification and a Bachelor's degree in English Literature.
                My passion for teaching comes from seeing my students grow in confidence
                as they master new skills and reach their personal and professional objectives.
              </p>
              <p className="text-gray-600 mb-4">
                I've worked with students of all levels - from complete beginners to advanced
                learners preparing for international exams. My teaching approach focuses on
                practical communication skills while building a strong foundation in grammar
                and vocabulary.
              </p>
            </div>
          </div>

          {/* ...rest of your page stays the same... */}
        </div>
      </section>
    </div>
  );
}
