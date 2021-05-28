import { CardElement, useElements } from "@stripe/react-stripe-js"
import Button from "components/Button"
import SectionTitle from "components/SectionTitle"
import Col from "containers/Col"
import Row from "containers/Row"
import Section from "containers/Section"
import { Color } from "defaults/style"
import { useState } from "react"
import { FlightData } from "types/app"
import { monetize } from "utils/number"
import { pluralize } from "utils/string"
import CardSampleModal from "./CardSampleModal"

type TotalPriceProps = {
  data: FlightData
  disabled?: boolean
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TotalPrice = ({ data, disabled, onSubmit }: TotalPriceProps) => {
  const elements = useElements()
  const { item, passengers, currency } = data

  const [modalDisplay, setModalDisplay] = useState<boolean>(false)

  const handleOpenModal = () => {
    setModalDisplay(true)
  }

  const handleCloseModal = () => {
    setModalDisplay(false)
    elements?.getElement(CardElement)?.focus()
  }

  return (
    <Section>
      <CardSampleModal show={modalDisplay} onClose={handleCloseModal} />
      <Row>
        <SectionTitle text="Payment Details" />
        <button
          type="button"
          onClick={handleOpenModal}
          className="text-xs underline text-blue-400 border-2 border-transparent
            focus:outline-none focus:border-blue-500 rounded-full px-2"
        >
          Card number for testing
        </button>
      </Row>
      <Row>
        <CardElement
          className="bg-green-200 border-green-200 border-2 rounded-full h-14 w-full p-4
            focus:outline-none hover:border-gray-400 focus:border-blue-500"
          options={{
            style: {
              base: { color: Color.BLUE_900, fontWeight: "bold" },
              empty: { fontWeight: "normal" }
            }
          }}
        />
      </Row>
      <Row>
        <Col w="1/2">
          <p className="text-blue-900 text-sm self-start -mt-2 mb-1">
            {monetize(item.MinPrice, currency) + " × " + passengers}{" "}
            {pluralize("passenger", passengers)}
          </p>
          <p className="text-blue-900 font-bold text-4xl whitespace-nowrap self-start">
            <span className="text-sm align-middle">Total:</span>{" "}
            {monetize(item.MinPrice * passengers, currency)}
          </p>
        </Col>
        <Col w="1/2">
          <Button
            text="Confirm Booking"
            className="h-full"
            disabled={disabled}
            onClick={onSubmit}
          />
        </Col>
      </Row>
    </Section>
  )
}

export default TotalPrice
