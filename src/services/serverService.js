// src/services/serverService.js
import serverData from "../data/serverStatus.json";

export const fetchServerStatus = async () => {
  // Simula retraso de red
  await new Promise((resolve) => setTimeout(resolve, 500));
  return serverData;
};
