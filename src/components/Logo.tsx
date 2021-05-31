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
      className="bg-white shadow rounded-full py-4 px-8 focus:outline-none"
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
