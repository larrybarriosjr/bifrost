import Logo from "components/Logo"
import { useCountryCode } from "hooks/useCountryCode"

function App() {
  const country = useCountryCode()

  if (!country) return null

  return <Logo className="h-10" />
}

export default App
