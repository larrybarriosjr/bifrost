import Row from "containers/Row"
import Section from "containers/Section"
import { useState } from "react"
import EmailInput from "./EmailInput"

const ContactDetails = () => {
  const [email, setEmail] = useState("")

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
