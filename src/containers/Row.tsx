type RowProps = {
  children: React.ReactNode
}

const Row = ({ children }: RowProps) => {
  return (
    <div className="flex m-6 justify-between gap-6 flex-wrap md:flex-nowrap">
      {children}
    </div>
  )
}

export default Row
