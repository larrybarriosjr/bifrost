type SectionProps = {
  children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="bg-gray-50 shadow-sm rounded-3xl">{children}</section>
  )
}

export default Section
