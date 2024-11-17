import React from "react";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, company, content }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg">
    <div className="mb-4 text-blue-600">❝</div>
    <p className="text-gray-700 mb-4">{content}</p>
    <div className="border-t pt-4">
      <div className="font-semibold text-blue-900">{name}</div>
      <div className="text-sm text-gray-600">
        {position}, {company}
      </div>
    </div>
  </div>
);

export default TestimonialCard;
