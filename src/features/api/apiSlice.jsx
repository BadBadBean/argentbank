import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/api/v1",
  prepareHeaders: (headers, { getState }) => {
    const userInfo = getState().auth.userInfo; // Récupérer les infos utilisateur depuis Redux
    if (userInfo?.token) {
      headers.set("Authorization", `Bearer ${userInfo.token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
