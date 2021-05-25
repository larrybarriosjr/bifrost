/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test"
    PUBLIC_URL: string
    REACT_APP_SKYSCANNER_API_URL: string
    REACT_APP_RAPIDAPI_KEY: string
    REACT_APP_RAPIDAPI_HOST: string
    REACT_APP_SKYSCANNER_REFERENCE_URL: string
    REACT_APP_SKYSCANNER_PLACES_URL: string
    REACT_APP_SKYSCANNER_ROUTES_URL: string
    REACT_APP_GEOLOCATION_URL: string
    REACT_APP_RANDOM_ORG_URL: string
    REACT_APP_STRIPE_PK: string
  }
}
