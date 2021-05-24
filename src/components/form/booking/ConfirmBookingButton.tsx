import React from "react"

type ConfirmBookingButtonProps = {
  disabled?: boolean
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ConfirmBookingButton = ({
  disabled,
  onSubmit
}: ConfirmBookingButtonProps) => {
  return (
    <button
      type="button"
      className={`focus:outline-none focus:border-blue-500
      border-2 rounded-full h-14 w-full font-bold ${
        disabled
          ? "bg-gray-300 text-gray-400 border-gray-300"
          : "bg-blue-900 text-gray-50 border-blue-900 hover:border-gray-400"
      }`}
      disabled={disabled}
      onClick={onSubmit}
    >
      Confirm Booking
    </button>
  )
}

export default ConfirmBookingButton
