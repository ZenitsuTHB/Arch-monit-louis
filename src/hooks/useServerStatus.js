// src/hooks/useServerStatus.js
import { useState, useEffect } from "react";
import { fetchServerStatus } from "../services/serverService";

export const useServerStatus = (intervalMs = 5000) => {
  const [serverStatus, setServerStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStatus = async () => {
      try {
        const data = await fetchServerStatus();
        setServerStatus(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching server status:", error);
        setServerStatus({ status: "ERROR" });
        setLoading(false);
      }
    };

    getStatus();
    const interval = setInterval(getStatus, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs]);

  return { serverStatus, loading };
};

