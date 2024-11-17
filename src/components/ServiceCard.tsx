import React from "react";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, icon: Icon }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-blue-600 mr-3" />
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-2">
          <ChevronRight className="w-4 h-4 mt-1 text-blue-600" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;
