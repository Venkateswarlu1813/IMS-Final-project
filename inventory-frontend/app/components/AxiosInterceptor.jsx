"use client";

import { useEffect } from "react";
import axios from "axios";

export default function AxiosInterceptor() {
  useEffect(() => {
    const baseCandidates = ["http://127.0.0.1:8000/api/"];

    // Determine runtime API base in order of priority:
    // 1) NEXT_PUBLIC_API_BASE_URL (build-time env)
    // 2) If running on the Vercel domain, use the known production backend
    // 3) Fallback to localhost dev API
    const runtimeBase =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      (typeof window !== "undefined" &&
      window.location.hostname.includes("vercel.app")
        ? "https://ims-final-project.onrender.com/api/"
        : "http://127.0.0.1:8000/api/");

    const interceptor = axios.interceptors.request.use((config) => {
      if (!config || !config.url) return config;

      for (const base of baseCandidates) {
        if (config.url.startsWith(base)) {
          config.url = config.url.replace(base, runtimeBase);
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
