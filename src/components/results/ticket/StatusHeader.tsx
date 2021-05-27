import Col from "containers/Col"
import Row from "containers/Row"
import Section from "containers/Section"

type StatusHeaderProps = {
  reference: string
}

const StatusHeader = ({ reference }: StatusHeaderProps) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <Section>
      <Row>
        <Col w="full">
          <p className="font-semibold text-green-600 text-4xl mb-2">
            Booking Successful!
          </p>
          <p className="mb-1 text-md font-mono">REFERENCE CODE: {reference}</p>
          <p className="text-lg">Thanks for booking with BIFROST.</p>
          <p className="text-sm">
            Please check your email for the details of your booking.
          </p>
          <button
            type="button"
            onClick={handlePrint}
            className="flex justify-center items-center h-10 w-40 mx-auto mb-2 mt-4
              font-bold bg-blue-900 text-gray-50 border-2 border-blue-900 rounded-full
              focus:outline-none focus:border-blue-500 hover:border-gray-400 print:hidden"
          >
            Print
          </button>
          <p className="text-xs print:hidden">
            You can also download this ticket by clicking this button.
          </p>
        </Col>
      </Row>
    </Section>
  )
}

export default StatusHeader