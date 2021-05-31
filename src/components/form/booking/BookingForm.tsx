import DropdownInput from "components/DropdownInput"
import SectionTitle from "components/SectionTitle"
import TextInput from "components/TextInput"
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
        <Col className="w-2/12">
          <DropdownInput<Honorific>
            label="Honorific"
            options={honorifics}
            value={data.honorific}
            onChange={handleDropdownChange("honorific")}
            autoFocus={id === 1}
          />
        </Col>
        <Col className="w-7/12">
          <TextInput
            name="Full Name"
            value={data.fullName}
            onChange={handleTextChange("fullName")}
          />
        </Col>
        <Col className="w-3/12">
          <DropdownInput<AgeGroup>
            label="Age group"
            options={ageGroups}
            value={data.ageGroup}
            onChange={handleDropdownChange("ageGroup")}
          />
        </Col>
      </Row>
    </Section>
  )
}

export default BookingForm
