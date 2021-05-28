import { FlightType } from "defaults/flight"
import { useFlightTypes } from "hooks/useFlightTypes"
import { useEffect } from "react"

type FlightTypeRadioProps = {
  type: FlightType
  setType: React.Dispatch<React.SetStateAction<FlightType>>
}

const FlightTypeRadio = ({ type, setType }: FlightTypeRadioProps) => {
  const flightTypes = useFlightTypes()

  useEffect(() => {
    if (!type) setType(FlightType.ONE_WAY)
  }, [type, setType])

  const handleClick = (value: FlightType) => {
    setType(value)
  }

  const handleArrowKeys = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
      case "ArrowRight":
        setType(
          type === FlightType.ONE_WAY
            ? FlightType.ROUND_TRIP
            : FlightType.ONE_WAY
        )
        break
      default:
        break
    }
  }

  return (
    <div
      className="flex gap-1 p-0.5 w-2/4 bg-green-200 rounded-full border-2 border-green-200
        focus:outline-none focus:border-blue-500"
      aria-labelledby="flight_type"
      role="radiogroup"
      onKeyDown={handleArrowKeys}
      tabIndex={0}
    >
      {flightTypes.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-center text-blue-900 ${
            item.value !== type ? "hover:bg-blue-200" : ""
          } cursor-pointer rounded-full h-12 w-1/2 ${
            item.value === type ? "bg-green-100 font-bold" : ""
          } transition-colors`}
          onClick={() => handleClick(item.value)}
          aria-checked={item.value === type}
          role="radio"
        >
          <label htmlFor={item.value}>{item.label}</label>
          <input
            id={item.value}
            type="radio"
            name="flight_type"
            value={item.value}
            title={item.label}
            defaultChecked={item.value === type}
            hidden
          />
        </div>
      ))}
    </div>
  )
}

export default FlightTypeRadio
