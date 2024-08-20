"use client";
import React from "react";
import { useCourseworkStore } from "../store/courseworkStore";

const CourseworkList = () => {
  const { coursework, files } = useCourseworkStore();

  if (!coursework.title && files.length === 0) {
    return <p>No coursework uploaded yet.</p>;
  }

  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-4">Uploaded Coursework</h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Type:</strong> {coursework.type || "N/A"}
        </li>
        <li>
          <strong>Subject:</strong> {coursework.subject || "N/A"}
        </li>
        <li>
          <strong>Title:</strong> {coursework.title || "N/A"}
        </li>
        <li>
          <strong>Files:</strong>
          <ul className="ml-4 list-none">
            {files.length > 0 ? (
              files.map((file, idx) => (
                <li key={idx}>
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </li>
              ))
            ) : (
              <li>No files uploaded.</li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CourseworkList;
