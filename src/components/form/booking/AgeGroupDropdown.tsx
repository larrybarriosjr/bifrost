import { AgeGroup } from "defaults/flight"
import { Color } from "defaults/style"
import { useAgeGroups } from "hooks/useAgeGroups"
import Select from "react-select"
import { InputValue } from "types/app"

type AgeGroupDropdownProps = {
  ageGroup: AgeGroup
  setAgeGroup: React.Dispatch<React.SetStateAction<AgeGroup>>
}

const AgeGroupDropdown = ({ ageGroup, setAgeGroup }: AgeGroupDropdownProps) => {
  const ageGroups = useAgeGroups()

  const handleChange = (value: InputValue<AgeGroup> | null) => {
    if (value) setAgeGroup(value.value)
  }

  return (
    <Select
      options={ageGroups}
      onChange={handleChange}
      value={ageGroups?.find(a => a.value === ageGroup)}
      className="w-4/12"
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

export default AgeGroupDropdown
