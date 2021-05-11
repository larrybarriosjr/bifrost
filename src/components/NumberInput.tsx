import { useState } from "react"

type NumberInputProps = {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  label: string
}

const NumberInput = ({ value, setValue, label }: NumberInputProps) => {
  const [inputValue, setInputValue] = useState(1)
  const [inputDisplay, setInputDisplay] = useState(false)

  const handleShowInput = () => {
    setInputDisplay(true)
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
    setValue(inputValue)
    setInputDisplay(false)
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleShowInput}
        className={`bg-green-200 border-green-200 border-2 rounded-full h-14 w-40 text-blue-900
            focus:outline-none hover:border-gray-400 focus:border-blue-500
            ${value < 1 ? "font-normal" : "font-bold"}`}
      >
        {value} {label}
      </button>
      {inputDisplay ? (
        <div className="absolute flex flex-row mt-16 bg-white rounded shadow-md border border-gray-300">
          <input
            className="w-16 bg-transparent pl-4 py-3"
            type="number"
            value={inputValue.toString()}
            onChange={handleChange}
            onKeyDown={handleInput}
            min="0"
          />
          <button
            onClick={handleSetValue}
            className="rounded-r p-3 font-bold text-gray-50 bg-blue-900 border-2 focus:outline-none hover:border-gray-400 focus:border-blue-500"
          >
            ✓
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default NumberInput
