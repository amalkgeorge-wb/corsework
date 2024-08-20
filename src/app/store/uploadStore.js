// src/app/store/uploadStore.js
import create from "zustand";
import { persist } from "zustand/middleware";

const useUploadStore = create(
  persist(
    (set, get) => ({
      files: [], // Ensure files is initialized as an empty array
      addFile: async (file) => {
        const base64File = await convertToBase64(file); // Convert file to base64
        const fileMetadata = {
          name: file.name,
          size: file.size,
          type: file.type,
          base64: base64File,
        };

        set((state) => ({
          files: [...state.files, fileMetadata], // Ensure you're adding to an array
        }));

        localStorage.setItem(
          "uploaded-files",
          JSON.stringify([...get().files, fileMetadata])
        );
      },
      loadFilesFromLocalStorage: () => {
        const storedFiles = JSON.parse(
          localStorage.getItem("uploaded-files") || "[]"
        );
        set({ files: storedFiles });
      },
    }),
    {
      name: "uploaded-files",
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

export { useUploadStore };
