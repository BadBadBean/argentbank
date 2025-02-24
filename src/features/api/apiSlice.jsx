import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl:"http://localhost:3001/api/v1" })

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["user"],
    endpoints: (builder) => ({}),
})
