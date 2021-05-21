type BookingHeaderProps = {
  number: number
}

const BookingHeader = ({ number }: BookingHeaderProps) => {
  return (
    <p className="font-bold text-blue-900">
      Booking Form for Passenger #{number}
    </p>
  )
}

export default BookingHeader
