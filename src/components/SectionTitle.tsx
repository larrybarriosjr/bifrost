type SectionTitleProps = {
  text: string
  subtext?: string
}

const SectionTitle = ({ text, subtext }: SectionTitleProps) => {
  return (
    <p className="font-bold text-blue-900">
      {text}
      {subtext ? <span className="font-normal"> ({subtext})</span> : ""}
    </p>
  )
}

export default SectionTitle
