import clsx from "clsx"
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
      className="flex gap-1 p-0.5 bg-green-200 border-2 border-green-200 rounded-full focus:outline-none focus:border-blue-500"
      aria-label="Flight type"
      role="radiogroup"
      onKeyDown={handleArrowKeys}
      tabIndex={0}
    >
      {flightTypes.map((item, idx) => (
        <div
          key={idx}
          className={clsx(
            "flex items-center justify-center w-1/2 h-12 text-blue-900",
            "transition-colors rounded-full cursor-pointer",
            item.value === type ? "bg-green-100 font-bold" : "hover:bg-blue-200"
          )}
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
