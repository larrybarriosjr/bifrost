import DropdownInput from "components/common/DropdownInput"
import SectionTitle from "components/common/SectionTitle"
import TextInput from "components/common/TextInput"
import Col from "containers/Col"
import Row from "containers/Row"
import Section from "containers/Section"
import { AgeGroup, Honorific } from "defaults/passenger"
import { useAgeGroups } from "hooks/useAgeGroups"
import { useHonorifics } from "hooks/useHonorifics"
import { OptionTypeBase } from "react-select"
import { PassengerData } from "types/app"

type BookingFormProps = {
  id: number
  data?: PassengerData
  setData: React.Dispatch<React.SetStateAction<PassengerData[]>>
}

const BookingForm = ({ id, data, setData }: BookingFormProps) => {
  const ageGroups = useAgeGroups()
  const honorifics = useHonorifics()

  const otherData = (arr: PassengerData[]) => arr.filter(p => p.id !== id)
  const thisData = (arr: PassengerData[]) => arr.filter(p => p.id === id)[0]

  const handleTextChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData(prev => [
        ...otherData(prev),
        { ...thisData(prev), [key]: e.target.value }
      ])
    }

  const handleDropdownChange =
    (key: string) => (value: OptionTypeBase | null) => {
      if (value)
        setData(prev => [
          ...otherData(prev),
          { ...thisData(prev), [key]: value.value }
        ])
    }

  if (!data) return null

  return (
    <Section>
      <Row>
        <SectionTitle text={`Booking Form for Passenger #${id}`} />
      </Row>
      <Row>
        <Col className="flex-1 md:w-3/12">
          <DropdownInput<AgeGroup>
            label="Age group"
            options={ageGroups}
            value={data.ageGroup}
            onChange={handleDropdownChange("ageGroup")}
          />
        </Col>
        <Col className="flex-1 md:w-2/12">
          <DropdownInput<Honorific>
            label="Honorific"
            options={honorifics}
            value={data.honorific}
            onChange={handleDropdownChange("honorific")}
            autoFocus={id === 1}
          />
        </Col>
        <Col className="w-full md:w-7/12">
          <TextInput
            name="Full Name"
            value={data.fullName}
            onChange={handleTextChange("fullName")}
          />
        </Col>
      </Row>
    </Section>
  )
}

export default BookingForm
