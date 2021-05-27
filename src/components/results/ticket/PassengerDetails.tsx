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
        <p className="font-bold text-blue-900">Passenger Details</p>
      </Row>
      <Row>
        <ol>
          {passengers.map(item => (
            <li key={item.id}>
              <span className="font-mono mr-4">{item.id}.</span>{" "}
              {item.honorific}. {item.fullName.toUpperCase()} ({item.ageGroup})
            </li>
          ))}
        </ol>
      </Row>
    </Section>
  )
}

export default PassengerDetails
