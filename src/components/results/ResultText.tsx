import Row from "containers/Row"
import Section from "containers/Section"

type ResultTextProps = {
  children: React.ReactNode
}

const ResultText = ({ children }: ResultTextProps) => {
  return (
    <Section>
      <Row>
        <p className="text-lg text-blue-900 text-center py-40 w-full">
          {children}
        </p>
      </Row>
    </Section>
  )
}

export default ResultText
