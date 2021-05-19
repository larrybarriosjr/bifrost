type RowProps = {
  children: React.ReactNode
}

const Row = ({ children }: RowProps) => {
  return <div className="flex m-6 justify-between gap-4">{children}</div>
}

export default Row
