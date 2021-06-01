import Row from "containers/Row"
import Section from "containers/Section"

type ResultTextProps = {
  children: React.ReactNode
}

const ResultText = ({ children }: ResultTextProps) => {
  return (
    <Section>
      <Row>
        <p className="w-full py-40 text-lg text-center text-blue-900">
          {children}
        </p>
      </Row>
    </Section>
  )
}

export default ResultText
