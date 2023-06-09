import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
//THis is the code for API or .env file
const rapidapiKey=import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi=createApi({
    reducerPath: 'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set("X-RapidAPI-Key",rapidapiKey);
            headers.set("X-RapidAPI-Host","article-extractor-and-summarizer.p.rapidapi.com");
            return headers;
        }
    }),
    endpoints:(builder)=>({
        getSummary: builder.query({
            query:(params)=>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
}); 
// We use lazy because we want user to click on enter part then load the data
export const {useLazyGetSummaryQuery}=articleApi;
