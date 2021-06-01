import clsx from "clsx"

type ColProps = {
  className: string
  children: React.ReactNode
}

const Col = ({ className, children }: ColProps) => {
  return (
    <div className={clsx("flex flex-col text-center", className)}>
      {children}
    </div>
  )
}

export default Col
