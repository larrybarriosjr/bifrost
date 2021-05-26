import Row from "containers/Row"
import Section from "containers/Section"
import EmailInput from "./EmailInput"
import FirstNameInput from "./FirstNameInput"

type ContactDetailsProps = {
  booker: string
  setBooker: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

const ContactDetails = ({
  booker,
  setBooker,
  email,
  setEmail
}: ContactDetailsProps) => {
  return (
    <Section>
      <Row>
        <p className="text-blue-900 font-bold">Contact Details</p>
      </Row>
      <Row>
        <FirstNameInput value={booker} setValue={setBooker} />
      </Row>
      <Row>
        <EmailInput value={email} setValue={setEmail} />
      </Row>
    </Section>
  )
}

export default ContactDetails
