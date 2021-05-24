import Col from "containers/Col"
import Row from "containers/Row"
import Section from "containers/Section"

const StatusHeader = () => {
  return (
    <Section>
      <Row>
        <Col w="full">
          <p className="font-semibold text-green-600 text-4xl">
            Booking Successful!
          </p>
          <p className="mt-4 text-lg">
            Please check your email for the details of your booking.
          </p>
          <p className="text-sm">
            You can also download the tickets below by clicking on the
            corresponding download icon.
          </p>
        </Col>
      </Row>
    </Section>
  )
}

export default StatusHeader
