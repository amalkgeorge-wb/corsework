"use client";
import React, { useState } from "react";

const courseworkExamples = {
  All: [
    {
      id: 1,
      title: "Shakespearean Literature Analysis",
      subject:
        "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought ",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
    {
      id: 2,
      title: "The Impact of Global Warming",
      subject:
        "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought ",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
    {
      id: 3,
      title: "Shakespearean Literature Analysis",
      subject:
        "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought ",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
    {
      id: 4,
      title: "The Impact of Global Warming",
      subject:
        "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought ",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
  ],
  "IA Example": [
    {
      id: 3,
      title: "Annual Financial Report",
      subject: "Math",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
    {
      id: 4,
      title: "Research on Renewable Energy",
      subject: "Science",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
  ],
  "EE Example": [
    {
      id: 5,
      title: "Startup Pitch Deck",
      subject: "Business",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
    {
      id: 6,
      title: "History of Modern Art",
      subject: "History",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
  ],
  "IO Example": [
    {
      id: 5,
      title: "Startup Pitch Deck",
      subject: "Business",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
    {
      id: 6,
      title: "History of Modern Art",
      subject: "History",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
  ],
  "Tok Example": [
    {
      id: 5,
      title: "Startup Pitch Deck",
      subject: "Business",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
    {
      id: 6,
      title: "History of Modern Art",
      subject: "History",
      image: "/images/report.svg",
      score: [
        {
          id: 1,
          img: "/images/head.svg",
          value: "Physics HL",
        },
        {
          id: 2,
          img: "/images/time.svg",
          value: "18 min read",
        },
        {
          id: 3,
          img: "/images/doc.svg",
          value: "2388 words",
        },
        {
          id: 4,
          img: "/images/rating.svg",
          value: "7/7",
        },
        {
          id: 5,
          img: "/images/language.svg",
          value: "English",
        },
      ],
    },
  ],
};

const CourseworkExplore = ({ title, tab }) => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-4 text-[#5B6170]">{title}</h2>

      {/* Tab Navigation */}
      {tab && (
        <div className="flex space-x-4 mb-6">
          {Object.keys(courseworkExamples).map((category) => (
            <button
              key={category}
              onClick={() => handleTabClick(category)}
              className={`py-2 px-4 rounded-2xl ${
                activeTab === category
                  ? "bg-[#FFFFFFA3] text-[#6947BF]"
                  : "bg-[#E5ECF3] text-[#98A1BB]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Tab Content: Display examples in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 ">
        {courseworkExamples[activeTab].map((example) => (
          <div key={example.id} className="border p-4 rounded-lg shadow flex">
            <div className=" p-1  mr-2 w-[230px]">
              <img src={example.image} alt={example.title} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#3D404B]">
                {example.title}
              </h3>
              <p className="text-[#7A8196] text-[12px]"> {example.subject}</p>
              <div>
                {example.score.map((item) => (
                  <div
                    key={item.id}
                    className="inline-flex items-center justify-between bg-white rounded-3xl px-2 py-1 my-1 mx-1"
                  >
                    <div className="flex-shrink-0">
                      <img src={item.img} className="w-4 h-4" />
                    </div>
                    <div className="text-[11px] text-[#3D404B] ml-2">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {!tab && (
          <div className="text-right text-[#7A8196] cursor-pointer">
            view all
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseworkExplore;
