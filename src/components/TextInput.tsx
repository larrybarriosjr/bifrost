type TextInputProps = {
  name: string
  value: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({ name, value, setValue, onChange }: TextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!setValue) return
    setValue(e.target.value)
  }

  return (
    <input
      placeholder={name}
      className={`${
        value ? "font-bold" : "font-light"
      } bg-green-200 border-green-200 border-2 rounded-full h-14 w-full px-4 text-blue-900
        focus:outline-none hover:border-gray-400 focus:border-blue-500`}
      onChange={onChange || handleChange}
      value={value}
    />
  )
}

export default TextInput
