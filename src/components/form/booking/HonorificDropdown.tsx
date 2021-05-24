import { Honorific } from "defaults/passenger"
import { Color } from "defaults/style"
import { useHonorifics } from "hooks/useHonorifics"
import Select from "react-select"
import { InputValue, PassengerData } from "types/app"

type HonorificDropdownProps = {
  id: number
  honorific: Honorific
  setHonorific: React.Dispatch<React.SetStateAction<PassengerData[]>>
}

const HonorificDropdown = ({
  id,
  honorific,
  setHonorific
}: HonorificDropdownProps) => {
  const honorifics = useHonorifics()

  const otherData = (arr: PassengerData[]) => arr.filter(p => p.id !== id)
  const thisData = (arr: PassengerData[]) => arr.filter(p => p.id === id)[0]

  const handleChange = (value: InputValue<Honorific> | null) => {
    if (value)
      setHonorific(prev => [
        ...otherData(prev),
        { ...thisData(prev), honorific: value.value }
      ])
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
