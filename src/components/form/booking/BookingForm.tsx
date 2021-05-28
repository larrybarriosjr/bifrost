import SectionTitle from "components/SectionTitle"
import Row from "containers/Row"
import Section from "containers/Section"
import { PassengerData } from "types/app"
import AgeGroupDropdown from "./AgeGroupDropdown"
import FullNameInput from "./FullNameInput"
import HonorificDropdown from "./HonorificDropdown"

type BookingFormProps = {
  id: number
  data?: PassengerData
  setData: React.Dispatch<React.SetStateAction<PassengerData[]>>
}

const BookingForm = ({ id, data, setData }: BookingFormProps) => {
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
        <FullNameInput id={id} fullName={data.fullName} setFullName={setData} />
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
