import { Link } from "react-router-dom"
import { FlightData } from "types/app"

type BookNowButtonProps = {
  data?: FlightData
}

const BookNowButton = ({ data }: BookNowButtonProps) => {
  if (!data) return null

  return (
    <Link
      to={{ pathname: "/booking", state: { data } }}
      className={`flex justify-center items-center border-2 rounded-full h-10 mr-2
              bg-blue-900 text-gray-50 border-blue-900 text-sm font-bold
                focus:outline-none focus:border-blue-500 hover:border-gray-400`}
    >
      Book Now
    </Link>
  )
}

export default BookNowButton
