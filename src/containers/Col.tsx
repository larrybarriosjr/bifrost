type ColProps = {
  w: string
  children: React.ReactNode
}

const Col = ({ w, children }: ColProps) => {
  return <div className={`flex flex-col w-${w} text-center`}>{children}</div>
}

export default Col
