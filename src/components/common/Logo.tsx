import logo from "assets/bifrost.png"
import { BifrostRoute } from "defaults/route"
import { useResults } from "hooks/useResults"
import { useHistory } from "react-router-dom"

const Logo = () => {
  const { remove } = useResults()
  const { replace } = useHistory()

  const handleClick = () => {
    remove()
    replace(BifrostRoute.HOME)
  }

  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 bg-white rounded-full shadow focus:outline-none"
    >
      <img
        src={logo}
        alt="Bifrost Flight Booking System"
        width="200"
        height="35"
      />
    </button>
  )
}

export default Logo
