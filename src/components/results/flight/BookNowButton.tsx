import { BifrostRoute } from "defaults/route"
import { Link } from "react-router-dom"
import { FlightData } from "types/app"

type BookNowButtonProps = {
  data?: FlightData
}

const BookNowButton = ({ data }: BookNowButtonProps) => {
  if (!data) return null

  return (
    <Link
      to={{ pathname: BifrostRoute.BOOKING, state: { flight: data } }}
      className="flex justify-center items-center border-2 rounded-full h-10 mr-2 mt-2
        text-sm font-bold bg-blue-900 text-gray-50 border-blue-900
        focus:outline-none focus:border-blue-500 hover:border-gray-400"
    >
      Book Now
    </Link>
  )
}

export default BookNowButton