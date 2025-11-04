'use client';

import { Award, Factory, Heart, Clock, DollarSign, Users } from 'lucide-react';

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: Award,
      title: "Quality Certifications",
      description: "All products sourced by Venture Tea are certified for Export quality and food safety standards.",
      color: "bg-blue-50"
    },
    {
      icon: Factory,
      title: "Production Certifications",
      description: "Certified production facilities, as well as certified food safety management systems.",
      color: "bg-green-50"
    },
    {
      icon: Heart,
      title: "Health & Safety Certified",
      description: "Health checks, sanitization points, clean rooms and other guidelines placed for safety.",
      color: "bg-amber-50"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Have your orders fulfilled in time for restocking and with no production delays.",
      color: "bg-purple-50"
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "The benefits we receive from bulk supplies of tea are passed down to our clients orders.",
      color: "bg-red-50"
    },
    {
      icon: Users,
      title: "Proper Employee Care",
      description: "Providing a healthy and safe workplace for all our staff members.",
      color: "bg-teal-50"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className={`${benefit.color} rounded-2xl p-8 space-y-4 hover:shadow-xl transition-shadow`}
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Icon className="w-7 h-7 text-gray-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {benefit.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
