import { AgeGroup } from "defaults/passenger"
import { Color } from "defaults/style"
import { useAgeGroups } from "hooks/useAgeGroups"
import Select from "react-select"
import { InputValue, PassengerData } from "types/app"

type AgeGroupDropdownProps = {
  id: number
  ageGroup: AgeGroup
  setAgeGroup: React.Dispatch<React.SetStateAction<PassengerData[]>>
}

const AgeGroupDropdown = ({
  id,
  ageGroup,
  setAgeGroup
}: AgeGroupDropdownProps) => {
  const ageGroups = useAgeGroups()

  const otherData = (arr: PassengerData[]) => arr.filter(p => p.id !== id)
  const thisData = (arr: PassengerData[]) => arr.filter(p => p.id === id)[0]

  const handleChange = (value: InputValue<AgeGroup> | null) => {
    if (value)
      setAgeGroup(prev => [
        ...otherData(prev),
        { ...thisData(prev), ageGroup: value.value }
      ])
  }

  return (
    <Select
      options={ageGroups}
      onChange={handleChange}
      value={ageGroups?.find(a => a.value === ageGroup)}
      className="w-3/12"
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
