type EmailInputProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const EmailInput = ({ value, setValue }: EmailInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <input
      type="email"
      placeholder="Email"
      className={`${
        value ? "font-bold" : "font-light"
      } bg-green-200 border-green-200 border-2 rounded-full h-14 w-full px-4 text-blue-900
        focus:outline-none hover:border-gray-400 focus:border-blue-500`}
      onChange={handleChange}
      value={value}
    />
  )
}

export default EmailInput
