import { useFlightTypes } from "hooks/useFlightTypes"
import { useEffect } from "react"

type FlightTypeRadioProps = {
  type: string
  setType: React.Dispatch<React.SetStateAction<string>>
}

const FlightTypeRadio = ({ type, setType }: FlightTypeRadioProps) => {
  const flightTypes = useFlightTypes()

  useEffect(() => {
    if (!type) setType("one-way")
  }, [type, setType])

  const handleClick = (value: string) => {
    setType(value)
  }

  return (
    <div className="flex gap-1 p-1 bg-green-200 rounded-full">
      {flightTypes.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-center text-blue-900 ${
            item.value !== type ? "hover:bg-blue-200" : ""
          } cursor-pointer rounded-full h-12 w-48 ${
            item.value === type ? "bg-green-100 font-bold" : ""
          }`}
          onClick={() => handleClick(item.value)}
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
