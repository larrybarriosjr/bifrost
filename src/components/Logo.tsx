import logo from "assets/bifrost.png"
import { BifrostRoute } from "defaults/route"
import { Link } from "react-router-dom"

type LogoProps = React.ComponentPropsWithoutRef<"img">

const Logo = ({ ...props }: LogoProps) => {
  return (
    <Link
      to={BifrostRoute.HOME}
      className="bg-white shadow rounded-full py-4 px-8"
    >
      <img src={logo} alt="Bifrost Flight Booking System" {...props} />
    </Link>
  )
}

export default Logo
