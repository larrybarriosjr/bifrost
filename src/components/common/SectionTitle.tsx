type SectionTitleProps = {
  text: string
  subtext?: string
}

const SectionTitle = ({ text, subtext }: SectionTitleProps) => {
  return (
    <p className="font-bold text-blue-900 whitespace-nowrap">
      {text}
      {subtext ? (
        <span className="font-normal whitespace-normal"> ({subtext})</span>
      ) : (
        ""
      )}
    </p>
  )
}

export default SectionTitle
