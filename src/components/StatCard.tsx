import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
    <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
    <div className="text-3xl font-bold text-blue-900 mb-2">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default StatCard;
