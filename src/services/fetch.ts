import axios, { AxiosResponse } from "axios";

const API_KEY: string =
  "live_fzhYrjV5ceIv4Xrbh8sXgITX5vwcMFuva5Hig2meaDnMd3O2Tr0uRJ5VXQyVhTJg";

const catAPI = axios.create({
  baseURL: `https://api.thecatapi.com/v1`,
});

export const fetchCatsImages = async () => {
  const data: AxiosResponse<Response> = await catAPI.get("/images/search", {
    params: {
      limit: 10,
      api_key: API_KEY,
    },
  });

  return data;
};

// AxiosResponse<Response>
