import Row from "containers/Row"
import Section from "containers/Section"
import { AgeGroup, Honorific } from "defaults/passenger"
import { useState } from "react"
import AgeGroupDropdown from "./AgeGroupDropdown"
import FullNameInput from "./FullNameInput"
import HonorificDropdown from "./HonorificDropdown"

type BookingFormProps = {
  id: number
}

const BookingForm = ({ id }: BookingFormProps) => {
  const [honorific, setHonorific] = useState<Honorific>(Honorific.MR)
  const [fullName, setFullName] = useState<string>("")
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(AgeGroup.ADULT)

  return (
    <Section>
      <Row>
        <p className="font-bold text-blue-900">
          Booking Form for Passenger #{id}
        </p>
      </Row>
      <Row>
        <HonorificDropdown honorific={honorific} setHonorific={setHonorific} />
        <FullNameInput value={fullName} setValue={setFullName} />
        <AgeGroupDropdown ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
      </Row>
    </Section>
  )
}

export default BookingForm
