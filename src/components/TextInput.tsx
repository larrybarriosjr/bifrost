import clsx from "clsx"

type TextInputProps = {
  name: string
  value: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  className?: string
  readOnly?: boolean
}

const TextInput = ({
  name,
  value,
  setValue,
  onChange,
  onFocus,
  className,
  readOnly
}: TextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!setValue) return
    setValue(e.target.value)
  }

  return (
    <input
      placeholder={name}
      className={clsx(
        "w-full px-4 text-blue-900 bg-green-200",
        "border-2 border-green-200 rounded-full h-14",
        "focus:outline-none hover:border-gray-400 focus:border-blue-500",
        value ? "font-bold" : "font-light",
        className
      )}
      onChange={onChange || handleChange}
      onFocus={onFocus}
      value={value}
      readOnly={readOnly}
    />
  )
}

export default TextInput
