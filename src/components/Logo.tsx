import logo from "assets/bifrost.png"

type LogoProps = React.ComponentPropsWithoutRef<"img">

const Logo = ({ ...props }: LogoProps) => {
  return (
    <div className="bg-white shadow rounded-full py-4 px-8 my-6">
      <img src={logo} alt="Bifrost Flight Booking System" {...props} />
    </div>
  )
}

export default Logo
