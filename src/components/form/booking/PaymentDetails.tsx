import { CardElement, useElements } from "@stripe/react-stripe-js"
import clsx from "clsx"
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
  loading?: boolean
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TotalPrice = ({ data, disabled, loading, onSubmit }: TotalPriceProps) => {
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
          className={clsx(
            "px-2 text-xs text-blue-600 underline border-2 border-transparent rounded-full",
            "focus:outline-none focus:border-blue-500"
          )}
        >
          Card number for testing
        </button>
      </Row>
      <Row>
        <CardElement
          className={clsx(
            "w-full p-4 bg-green-200 border-2 border-green-200 rounded-full h-14",
            "focus:outline-none hover:border-gray-400 focus:border-blue-500"
          )}
          options={{
            style: {
              base: { color: Color.BLUE_900, fontWeight: "bold" },
              empty: { fontWeight: "normal" }
            }
          }}
        />
      </Row>
      <Row>
        <Col className="w-1/2">
          <p className="self-start mb-1 -mt-2 text-sm text-blue-900">
            {monetize(item.MinPrice, currency) + " × " + passengers}{" "}
            {pluralize("passenger", passengers)}
          </p>
          <p className="self-start text-4xl font-bold text-blue-900 whitespace-nowrap">
            <span className="text-sm align-middle">Total:</span>{" "}
            {monetize(item.MinPrice * passengers, currency)}
          </p>
        </Col>
        <Col className="w-1/2">
          <Button
            text="Confirm Booking"
            className="h-full"
            disabled={disabled}
            loading={loading}
            onClick={onSubmit}
          />
        </Col>
      </Row>
    </Section>
  )
}

export default TotalPrice
