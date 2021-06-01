type SectionProps = {
  children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="w-full shadow-sm bg-gray-50 rounded-3xl">
      {children}
    </section>
  )
}

export default Section
