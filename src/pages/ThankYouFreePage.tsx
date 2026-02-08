import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYouFreePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center bg-gray-50 rounded-lg p-10 shadow-sm">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="text-green-600" size={28} />
          </div>
        </div>

        <h1 className="mb-4">Thank you!</h1>

        <p className="text-gray-600 mb-6">
          Your free trial request has been received.
          <br />
          I’ll contact you shortly to schedule your lesson.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="inline-flex w-full justify-center items-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex w-full justify-center items-center bg-white text-gray-900 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
