import axios from "axios";
import { Request } from "../interfaces/request.interface";
import { Response } from "../interfaces/response.interfaces";

const UrlGoogleApi = import.meta.env.VITE_API_LINK;
const Authorization = import.meta.env.VITE_AUTHORIZATION;
const GoogleProjectID = import.meta.env.VITE_GOOGLE_PROJECT;

export const fetchGoogleApi = (payload: Request) => {
  let header = {
    headers: {
      Authorization: Authorization,
      "x-goog-user-project": GoogleProjectID,
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  const promise = axios.post<Response>(UrlGoogleApi, payload, header);
  return promise.then((response) => response.data);
};
