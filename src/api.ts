import axios from "axios";

const tvApi = axios.create({ baseURL: "https://api.tvmaze.com" });

export const searchShows = (q: string) => {
  return tvApi.get("/search/shows", {
    params: { q },
  });
};