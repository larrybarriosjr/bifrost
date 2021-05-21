import Row from "containers/Row"
import Section from "containers/Section"
import { AgeGroup } from "defaults/flight"
import { useState } from "react"
import AgeGroupDropdown from "./AgeGroupDropdown"
import BookingHeader from "./BookingHeader"
import FullNameInput from "./FullNameInput"

type BookingFormProps = {
  id: number
}

const BookingForm = ({ id }: BookingFormProps) => {
  const [fullName, setFullName] = useState<string>("")
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(AgeGroup.ADULT)

  return (
    <Section>
      <Row>
        <BookingHeader number={id} />
      </Row>
      <Row>
        <FullNameInput value={fullName} setValue={setFullName} />
        <AgeGroupDropdown ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
      </Row>
    </Section>
  )
}

export default BookingForm
