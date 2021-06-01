import clsx from "clsx"
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
    if (e.key === "Enter") handleSetValue()
  }

  const handleSetValue = () => {
    if (inputValue) setPassengers(inputValue)
    setInputDisplay(false)
  }

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseDown={() => setIgnoreBlur(true)}
      onMouseUp={() => setIgnoreBlur(false)}
      onFocus={handleShowInput}
      onBlur={handleHideInput}
    >
      <button
        type="button"
        onClick={handleShowInput}
        className={clsx(
          "w-full font-bold text-blue-900 bg-green-200 border-2 border-green-200 rounded-full h-14",
          "focus:outline-none hover:border-gray-400 focus:border-blue-500"
        )}
      >
        {passengers} {pluralize("Passenger", passengers)}
      </button>
      {inputDisplay ? (
        <div className="absolute z-10 flex flex-row mt-16 bg-white border border-gray-300 rounded shadow-md">
          <input
            className="w-full py-3 pl-4 bg-transparent"
            type="number"
            value={inputValue.toString()}
            onChange={handleChange}
            onKeyDown={handleInput}
            autoFocus={inputDisplay}
            min="1"
          />
          <button
            type="button"
            onClick={handleSetValue}
            className={clsx(
              "w-12 font-bold bg-blue-900 border-2 rounded-r text-gray-50",
              "focus:outline-none hover:border-gray-400 focus:border-blue-500"
            )}
          >
            ✓
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default PassengerInput
