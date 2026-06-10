"use client";

import { useEffect } from "react";
import axios from "axios";

export default function AxiosInterceptor() {
  useEffect(() => {
    const baseCandidates = [
      "http://127.0.0.1:8000/api/",
      "https://ims-final-project.onrender.com/api/",
    ];

    const interceptor = axios.interceptors.request.use((config) => {
      if (!config || !config.url) return config;

      for (const base of baseCandidates) {
        if (config.url.startsWith(base)) {
          const newBase = process.env.NEXT_PUBLIC_API_BASE_URL || base;
          config.url = config.url.replace(base, newBase);
          break;
        }
      }

      return config;
    });

    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, []);

  return null;
}
