import Button from "components/Button"
import Col from "containers/Col"
import Row from "containers/Row"
import Section from "containers/Section"
import { useBarcode } from "react-barcodes"

type StatusHeaderProps = {
  reference: string
}

const StatusHeader = ({ reference }: StatusHeaderProps) => {
  const { inputRef } = useBarcode({
    value: reference,
    options: { text: "Bifrost_Reference_Code_".toUpperCase() + reference }
  })

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
          <p className="mb-1 text-md font-mono print:hidden">
            REFERENCE CODE: {reference}
          </p>
          <p className="text-lg">Thanks for booking with BIFROST.</p>
          <p className="text-sm">
            Please check your email for the details of your booking.
          </p>
          <img
            ref={inputRef}
            alt="Booking barcode"
            className="w-80 mt-2 self-center hidden print:block"
          />
          <Button
            text="Print"
            onClick={handlePrint}
            className="h-10 w-40 mx-auto my-2"
            autoFocus
          />
          <p className="text-xs print:hidden">
            You can also download this ticket by clicking this button.
          </p>
        </Col>
      </Row>
    </Section>
  )
}

export default StatusHeader
