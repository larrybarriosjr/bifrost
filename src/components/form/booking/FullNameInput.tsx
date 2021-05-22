type FullNameInputProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const FullNameInput = ({ value, setValue }: FullNameInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <input
      placeholder="Full Name"
      className={`${
        value ? "font-bold" : "font-light"
      } bg-green-200 border-green-200 border-2 rounded-full h-14 w-7/12 px-4 text-blue-900
        focus:outline-none hover:border-gray-400 focus:border-blue-500`}
      onChange={handleChange}
      value={value}
    />
  )
}

export default FullNameInput
