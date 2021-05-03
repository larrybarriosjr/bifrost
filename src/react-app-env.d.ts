/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test"
    PUBLIC_URL: string
    REACT_APP_SKYSCANNER_API_URL: string
    REACT_APP_RAPIDAPI_KEY: string
    REACT_APP_RAPIDAPI_HOST: string
    REACT_APP_SKYSCANNER_REFERENCE_URL: string
    REACT_APP_SKYSCANNER_QUERY_URL: string
    REACT_APP_SKYSCANNER_ROUTES_URL: string
    REACT_APP_SKYSCANNER_QUOTES_URL: string
    REACT_APP_SKYSCANNER_DATES_URL: string
  }
}
