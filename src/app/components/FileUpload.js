"use client";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useCourseworkStore } from "../store/courseworkStore";
import CourseworkForm from "./CourseworkForm";
import { Button } from "@/components/ui/button";

const FileUpload = () => {
  const [error, setError] = useState(null);
  const { files, addFile, loadFromLocalStorage } = useCourseworkStore();

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file.size > 25 * 1024 * 1024) {
      setError("File is too large. Maximum size is 25MB.");
      return;
    }
    setError(null);
    addFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col sm:flex-row justify-between mt-8 ">
      <div>
        <h1 className="text-2xl font-bold mb-6 text-left text-[28px]">
          Hey IB Folks! Unsure about the quality of your answers?
          <span className="text-[#6947BF]"> We get you.</span>
        </h1>
        <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg w-full max-w-4xl mx-auto">
          {/* File upload box */}
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-[#7A8196] p-10 rounded-md w-full text-center bg-white hover:bg-gray-50"
          >
            <input {...getInputProps()} />
            <p className="text-[#7A8196]">
              Drag & drop a file here, or click to select a file
            </p>
            <p className="text-xs text-gray-400">*Limit 25 MB per file.</p>
            <Button className="rounded-3xl bg-[#FCFBFD] text-[#6947BF] border border-[#CEC4EB] mt-5">
              Upload your file
            </Button>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          {/* File List */}
          <ul className="mt-4">
            {files.length > 0 ? (
              files.map((file, idx) => (
                <li key={idx} className="text-gray-600">
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </li>
              ))
            ) : (
              <li className="text-gray-500">No files uploaded yet.</li>
            )}
          </ul>
          <div className="w-full text-left mt-6">
            {" "}
            {/* Left-aligns the form */}
            <CourseworkForm />
          </div>
        </div>
      </div>
      <div className="hidden lg:block md:w-1/2 w-full justify-center items-center ms-14">
        {/* Placeholder for the astronaut image */}
        <img src="/images/astro-grade.svg" alt="Astronaut" className="w-80" />
      </div>
    </div>
  );
};

export default FileUpload;
