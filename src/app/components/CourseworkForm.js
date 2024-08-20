"use client";
import React, { useEffect } from "react";
import { useCourseworkStore } from "../store/courseworkStore";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const CourseworkForm = () => {
  const { coursework, updateCoursework, loadFromLocalStorage } =
    useCourseworkStore();

  useEffect(() => {
    // Load saved data from localStorage on component mount
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCoursework(name, value); // Update Zustand store and localStorage
  };
  return (
    <form className=" w-full max-w-md items-start">
      {/* Coursework Type Dropdown */}
      <div className="text-[#7A8196] text-[14px]">
        Select your course & subject <sup>*</sup>
      </div>
      <div className="flex space-x-4">
        <div>
          <Select>
            <SelectTrigger className="w-[187px]">
              <SelectValue placeholder="Coursework Type" />
            </SelectTrigger>
            <SelectContent
              name="type"
              value={coursework.type}
              onChange={handleChange}
            >
              <SelectGroup>
                <SelectItem value="Essay">Essay</SelectItem>
                <SelectItem value="Report">Report</SelectItem>
                <SelectItem value="Presentation">Presentation</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* Subject Dropdown */}
        <div>
          <Select>
            <SelectTrigger className="w-[115px]">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent
              name="subject"
              value={coursework.subject}
              onChange={handleChange}
            >
              <SelectGroup>
                <SelectItem value="Math">Math</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="History">History</SelectItem>
                <SelectItem value="Literature">Literature</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Essay Title Text Input */}
      <label className="block mt-2">
        <span className="text-[#7A8196] text-[14px]">
          Enter your essay title<sup>*</sup>(Required){" "}
        </span>
        <Input
          type="text"
          name="title"
          value={coursework.title}
          onChange={handleChange}
          className="mt-1 block border border-gray-300 shadow-sm p-2 w-[330px]"
          placeholder="How nation works..."
        />
      </label>
      {/* <Button className="flex items-center bg-[#ADB8C9] text-white font-semibold px-2 py-2 rounded-full shadow-md w-[245px]">
        <span className="flex items-center justify-center w-8 h-8 rounded-full mr-2">
          <img src="/images/button-img.svg" />
        </span>
        Evaluate your Score
      </Button> */}
      <Button className="flex items-center bg-[#ADB8C9] text-white font-semibold py-2 rounded-full shadow-md w-[245px] text-[18px] mt-4">
        <span className="flex items-center justify-center w-8 h-8  rounded-full mr-2">
          <img src="/images/button-img.svg" />
        </span>
        Evaluate your Score
      </Button>
    </form>
  );
};

export default CourseworkForm;
