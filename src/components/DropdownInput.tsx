import { Color } from "defaults/style"
import Select, { ActionMeta, OptionTypeBase } from "react-select"
import { InputValue } from "types/app"

type DropdownInputProps<T> = {
  autoFocus?: boolean
  options: InputValue<T>[]
  value: T
  onChange: (
    value: OptionTypeBase | null,
    action: ActionMeta<OptionTypeBase>
  ) => void
}

const DropdownInput = <T extends unknown>({
  autoFocus,
  options,
  value,
  onChange
}: DropdownInputProps<T>) => {
  return (
    <Select
      autoFocus={autoFocus}
      options={options}
      onChange={onChange}
      value={options?.find(a => a.value === value)}
      styles={{
        control: base => ({
          ...base,
          backgroundColor: Color.GREEN_200,
          borderRadius: "50px",
          borderColor: Color.GREEN_200,
          borderWidth: "2px",
          padding: "0.5rem"
        }),
        singleValue: base => ({
          ...base,
          color: Color.BLUE_900,
          fontWeight: "bold"
        }),
        indicatorSeparator: base => ({
          ...base,
          backgroundColor: Color.GRAY_600
        }),
        dropdownIndicator: base => ({
          ...base,
          color: Color.GRAY_600
        })
      }}
    />
  )
}

export default DropdownInput
