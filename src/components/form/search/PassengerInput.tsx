import { InitialFlightData } from "defaults/flight"
import { LocalStorageKey } from "defaults/web"
import { useLocalStorage } from "hooks/useLocalStorage"
import { useState } from "react"
import { pluralize } from "utils/string"

const PassengerInput = () => {
  const [passengers, setPassengers] = useLocalStorage<number>(
    LocalStorageKey.PASSENGERS,
    InitialFlightData.PASSENGERS
  )

  const [inputValue, setInputValue] = useState(passengers)
  const [ignoreBlur, setIgnoreBlur] = useState(false)
  const [inputDisplay, setInputDisplay] = useState(false)

  const handleShowInput = () => {
    setInputValue(passengers)
    setInputDisplay(true)
  }

  const handleHideInput = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!ignoreBlur) setInputDisplay(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = e.target.value

    if (/^\s*$/.test(num)) return setInputValue(0)
    if (/\D/.test(num)) return setInputValue(parseInt(num))
    if (inputValue === 0) return setInputValue(parseInt(num.replace(/0+/, "")))
    if (/^\d*$/.test(num)) return setInputValue(parseInt(num))
  }

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ".") e.preventDefault()
    if (e.key === "0" && inputValue === 0) e.preventDefault()
  }

  const handleSetValue = () => {
    if (inputValue) setPassengers(inputValue)
    setInputDisplay(false)
  }

  return (
    <div
      className="flex flex-col items-center w-1/4"
      onMouseDown={() => setIgnoreBlur(true)}
      onMouseUp={() => setIgnoreBlur(false)}
      onBlur={handleHideInput}
    >
      <button
        type="button"
        onClick={handleShowInput}
        className={`bg-green-200 border-green-200 border-2 rounded-full h-14 w-full text-blue-900
            focus:outline-none hover:border-gray-400 focus:border-blue-500 font-bold`}
      >
        {passengers} {pluralize("Passenger", passengers)}
      </button>
      {inputDisplay ? (
        <div className="absolute flex flex-row mt-16 bg-white rounded shadow-md border border-gray-300">
          <input
            className="w-36 bg-transparent pl-4 py-3"
            type="number"
            value={inputValue.toString()}
            onChange={handleChange}
            onKeyDown={handleInput}
            min="1"
          />
          <button
            type="button"
            onClick={handleSetValue}
            className="rounded-r w-12 font-bold text-gray-50 bg-blue-900 border-2 focus:outline-none hover:border-gray-400 focus:border-blue-500"
          >
            ✓
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default PassengerInput
