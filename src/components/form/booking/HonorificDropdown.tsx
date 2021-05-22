import { Honorific } from "defaults/passenger"
import { Color } from "defaults/style"
import { useHonorifics } from "hooks/useHonorifics"
import Select from "react-select"
import { InputValue } from "types/app"

type HonorificDropdownProps = {
  honorific: Honorific
  setHonorific: React.Dispatch<React.SetStateAction<Honorific>>
}

const HonorificDropdown = ({
  honorific,
  setHonorific
}: HonorificDropdownProps) => {
  const honorifics = useHonorifics()

  const handleChange = (value: InputValue<Honorific> | null) => {
    if (value) setHonorific(value.value)
  }

  return (
    <Select
      options={honorifics}
      onChange={handleChange}
      value={honorifics?.find(a => a.value === honorific)}
      className="w-2/12"
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

export default HonorificDropdown
