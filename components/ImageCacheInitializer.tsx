"use client";

import { useEffect } from "react";
import { initializeImageCache } from "@/utils/imagePreloader";

const ImageCacheInitializer: React.FC = () => {
  useEffect(() => {

    initializeImageCache()
      .then(() => {
        console.log("Image cache initialization complete");
      })
      .catch((error) => {
        console.error("Image cache initialization failed:", error);
      });
  }, []);

  return null;
};

export default ImageCacheInitializer;
