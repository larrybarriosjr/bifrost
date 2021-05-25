import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import App from "app/App"
import { STRIPE_PK } from "defaults/env"
import { ReactQueryDefaultOptions } from "defaults/lib"
import React from "react"
import "react-day-picker/lib/style.css"
import ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import "styles/datepicker.css"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

const queryClient = new QueryClient(ReactQueryDefaultOptions)
const stripePromise = loadStripe(STRIPE_PK)

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
