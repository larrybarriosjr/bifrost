import SectionTitle from "components/SectionTitle"
import TextInput from "components/TextInput"
import Col from "containers/Col"
import Row from "containers/Row"
import Section from "containers/Section"
import { PassengerData } from "types/app"
import AgeGroupDropdown from "./AgeGroupDropdown"
import HonorificDropdown from "./HonorificDropdown"

type BookingFormProps = {
  id: number
  data?: PassengerData
  setData: React.Dispatch<React.SetStateAction<PassengerData[]>>
}

const BookingForm = ({ id, data, setData }: BookingFormProps) => {
  const otherData = (arr: PassengerData[]) => arr.filter(p => p.id !== id)
  const thisData = (arr: PassengerData[]) => arr.filter(p => p.id === id)[0]

  const handleChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData(prev => [
        ...otherData(prev),
        { ...thisData(prev), [key]: e.target.value }
      ])
    }

  if (!data) return null

  return (
    <Section>
      <Row>
        <SectionTitle text={`Booking Form for Passenger #${id}`} />
      </Row>
      <Row>
        <HonorificDropdown
          id={id}
          honorific={data.honorific}
          setHonorific={setData}
        />
        <Col w="7/12">
          <TextInput
            name="Full Name"
            value={data.fullName}
            onChange={handleChange("fullName")}
          />
        </Col>
        <AgeGroupDropdown
          id={id}
          ageGroup={data.ageGroup}
          setAgeGroup={setData}
        />
      </Row>
    </Section>
  )
}

export default BookingForm
