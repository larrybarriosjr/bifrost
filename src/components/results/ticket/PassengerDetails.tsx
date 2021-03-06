import SectionTitle from "components/common/SectionTitle"
import Col from "containers/Col"
import Row from "containers/Row"
import Section from "containers/Section"
import { PassengerData } from "types/app"

type PassengerDetailsProps = {
  passengers: PassengerData[]
}

const PassengerDetails = ({ passengers }: PassengerDetailsProps) => {
  return (
    <Section>
      <Row>
        <SectionTitle text="Passenger Details" />
      </Row>
      <Row>
        <ol className="w-full">
          {passengers.map(item => (
            <li key={item.id} className="flex flex-wrap justify-between mb-2">
              <Col className="w-max">
                <p className="text-left">
                  <span className="font-mono">{item.id}.</span> {item.honorific}
                  . {item.fullName.toUpperCase()} ({item.ageGroup})
                </p>
              </Col>
              <Col className="w-max">
                <p className="text-left">
                  <span className="font-bold text-blue-900">Seat:</span> Upon
                  Check-In
                </p>
              </Col>
            </li>
          ))}
        </ol>
      </Row>
    </Section>
  )
}

export default PassengerDetails
