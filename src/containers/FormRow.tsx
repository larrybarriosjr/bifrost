type FormRowProps = {
  children: React.ReactNode
}

const FormRow = ({ children }: FormRowProps) => {
  return <div className="flex m-6 justify-between gap-4">{children}</div>
}

export default FormRow
