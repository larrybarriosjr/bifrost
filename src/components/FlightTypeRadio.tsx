import { useFlightTypes } from "hooks/useFlightTypes"
import { useLocalStorage } from "hooks/useLocalStorage"

const FlightTypeRadio = () => {
  const flightTypes = useFlightTypes()
  const [flightType, setFlightType] = useLocalStorage("flight-type", "")

  const handleClick = (value: string) => {
    setFlightType(value)
  }

  return (
    <div className="flex gap-1 p-1 bg-green-200 rounded-full">
      {flightTypes.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-center text-blue-900 ${
            item.value !== flightType ? "hover:bg-blue-200" : ""
          } cursor-pointer rounded-full h-12 w-48 ${
            item.value === flightType ? "bg-green-100 font-bold" : ""
          }`}
          onClick={() => handleClick(item.value)}
        >
          <label htmlFor={item.value}>{item.label}</label>
          <input
            id={item.value}
            type="radio"
            name="flight-type"
            value={item.value}
            title={item.label}
            defaultChecked={item.value === flightType}
            hidden
          />
        </div>
      ))}
    </div>
  )
}

export default FlightTypeRadio
