type SectionTitleProps = {
  text: string
  subtext?: string
}

const SectionTitle = ({ text, subtext }: SectionTitleProps) => {
  return (
    <p className="text-blue-900 font-bold">
      {text}
      {subtext ? <span className="font-normal"> ({subtext})</span> : ""}
    </p>
  )
}

export default SectionTitle
