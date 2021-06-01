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
        <Col className="w-full">
          <p className="mb-2 text-4xl font-semibold text-green-600">
            Booking Successful!
          </p>
          <p className="mb-1 font-mono text-md print:hidden">
            REFERENCE CODE: {reference}
          </p>
          <p className="text-lg">Thanks for booking with BIFROST.</p>
          <p className="text-sm">
            Please check your email for the details of your booking.
          </p>
          <img
            ref={inputRef}
            alt="Booking barcode"
            className="self-center hidden mt-2 w-80 print:block"
          />
          <Button
            text="Print"
            onClick={handlePrint}
            className="w-40 h-10 mx-auto my-2"
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
