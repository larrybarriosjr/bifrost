type RadioGroupProps = {
  name: string
  items: { value: string; label: string }[]
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

const RadioGroup = ({
  name,
  items,
  selected,
  setSelected
}: RadioGroupProps) => {
  const handleClick = (value: string) => {
    setSelected(value)
  }

  return (
    <div className="flex gap-1 p-1 bg-green-200 rounded-full">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-center ${
            item.value !== selected ? "hover:bg-blue-200" : ""
          } cursor-pointer rounded-full h-12 w-48 ${
            item.value === selected ? "bg-blue-900 text-gray-50" : ""
          }`}
          onClick={() => handleClick(item.value)}
        >
          <label htmlFor={item.value}>{item.label}</label>
          <input
            id={item.value}
            type="radio"
            name={name}
            value={item.value}
            title={item.label}
            defaultChecked={item.value === selected}
            hidden
          />
        </div>
      ))}
    </div>
  )
}

export default RadioGroup
