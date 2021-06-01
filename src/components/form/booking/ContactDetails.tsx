import SectionTitle from "components/common/SectionTitle"
import TextInput from "components/common/TextInput"
import Row from "containers/Row"
import Section from "containers/Section"

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
        <SectionTitle text="Contact Details" />
      </Row>
      <Row>
        <TextInput name="First Name" value={booker} setValue={setBooker} />
      </Row>
      <Row>
        <TextInput name="Email" value={email} setValue={setEmail} />
      </Row>
    </Section>
  )
}

export default ContactDetails
