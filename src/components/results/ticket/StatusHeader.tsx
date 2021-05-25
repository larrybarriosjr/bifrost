import Col from "containers/Col"
import Row from "containers/Row"
import Section from "containers/Section"

type StatusHeaderProps = {
  reference: string
}

const StatusHeader = ({ reference }: StatusHeaderProps) => {
  return (
    <Section>
      <Row>
        <Col w="full">
          <p className="font-semibold text-green-600 text-4xl mb-2">
            Booking Successful!
          </p>
          <p className="mb-1 text-md font-mono">REFERENCE CODE: {reference}</p>
          <p className="text-lg">
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
