import App from "app/App"
import { ResultsProvider } from "context/ResultsContext"
import React from "react"
import "react-day-picker/lib/style.css"
import ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import "styles/datepicker.css"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ResultsProvider>
        <App />
      </ResultsProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
