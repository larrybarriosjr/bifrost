import Row from "containers/Row"
import Section from "containers/Section"
import BookingHeader from "./BookingHeader"

type BookingFormProps = {
  id: number
}

const BookingForm = ({ id }: BookingFormProps) => {
  return (
    <Section>
      <Row>
        <BookingHeader number={id} />
      </Row>
    </Section>
  )
}

export default BookingForm
