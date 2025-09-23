// components/OurPeopleSection.tsx
import React from "react";

const people = [
  {
    name: "Sam Spampinato",
    title: "Founder and President",
    description:
      "Sam leads STAAJ with a focus on clarity, results, and real relationships. He brings years of experience scaling businesses and helps clients think bigger while staying grounded in what works.",
    image: "/images/p1.png",
  },
  {
    name: "Bryna Kirzner",
    title: "Founder and Chief Operating Officer",
    description:
      "Bryna keeps everything running smoothly. She's an expert in operations and team leadership, and she helps clients turn big goals into simple, workable plans.",
    image: "/images/p2.jpeg",
  },
  {
    name: "Garrett Finley",
    title: "Co-Founder and Director of Operational Integrity",
    description:
      "Garrett makes sure every client feels supported and seen. He blends process expertise with a deep commitment to service, helping teams work smarter and communicate better.",
    image: "/images/p3.jpeg",
  },
  {
    name: "Alex Wichman",
    title: "Co-Founder and Director of Marketing",
    description:
      "Alex helps clients find their voice and connect with the right audience. He brings creative energy and strategic thinking to every project, making sure brands grow with purpose.",
    image: "/images/p4.png",
  },
];

export default function OurPeopleSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
            Meet Our People
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The team behind STAAJ Solutions brings together deep expertise, clarity, and a passion for helping businesses grow with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {people.map((person, idx) => (
            <div
              key={person.name}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-lg border-4 border-white shadow mb-4 object-cover"
              />
              <h3 className="font-bold text-xl text-gray-900">{person.name}</h3>
              <p className="font-semibold text-pink-700">{person.title}</p>
              <p className="text-gray-600 mt-2 text-sm">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
