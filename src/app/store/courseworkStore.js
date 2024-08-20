// src/app/store/courseworkStore.js
import create from "zustand";
import { persist } from "zustand/middleware";

const useCourseworkStore = create(
  persist(
    (set, get) => ({
      coursework: {
        type: "",
        subject: "",
        title: "",
      },
      files: [],

      // Update coursework form data
      updateCoursework: (key, value) => {
        const updatedCoursework = { ...get().coursework, [key]: value };
        set({ coursework: updatedCoursework });

        // Save form data to localStorage
        localStorage.setItem(
          "coursework-data",
          JSON.stringify(updatedCoursework)
        );
      },

      // Add file and persist in localStorage
      addFile: async (file) => {
        const base64File = await convertToBase64(file); // Convert file to base64
        const newFile = {
          name: file.name,
          size: file.size,
          type: file.type,
          base64: base64File,
        };
        const updatedFiles = [...get().files, newFile];
        set({ files: updatedFiles });

        // Save the updated files to localStorage
        localStorage.setItem("uploaded-files", JSON.stringify(updatedFiles));
      },

      // Load files and form data from localStorage
      loadFromLocalStorage: () => {
        const savedCoursework = JSON.parse(
          localStorage.getItem("coursework-data") || "{}"
        );
        const savedFiles = JSON.parse(
          localStorage.getItem("uploaded-files") || "[]"
        );
        if (savedCoursework) {
          set({ coursework: savedCoursework });
        }
        if (savedFiles) {
          set({ files: savedFiles });
        }
      },

      // Clear form data and files from Zustand state and localStorage
      clearData: () => {
        set({
          coursework: {
            type: "",
            subject: "",
            title: "",
          },
          files: [],
        });
        localStorage.removeItem("coursework-data");
        localStorage.removeItem("uploaded-files");
      },
    }),
    {
      name: "coursework-store", // Persistence key
    }
  )
);

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export { useCourseworkStore };
