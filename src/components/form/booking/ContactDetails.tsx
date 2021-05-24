import Row from "containers/Row"
import Section from "containers/Section"
import EmailInput from "./EmailInput"

type ContactDetailsProps = {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

const ContactDetails = ({ email, setEmail }: ContactDetailsProps) => {
  return (
    <Section>
      <Row>
        <p className="text-blue-900 font-bold">Contact Details</p>
      </Row>
      <Row>
        <EmailInput value={email} setValue={setEmail} />
      </Row>
    </Section>
  )
}

export default ContactDetails
