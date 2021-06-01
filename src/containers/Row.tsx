type RowProps = {
  children: React.ReactNode
}

const Row = ({ children }: RowProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-6 m-6 md:flex-nowrap">
      {children}
    </div>
  )
}

export default Row
