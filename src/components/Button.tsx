type ButtonProps = {
  text: string
  disabled?: boolean
  loading?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  autoFocus?: boolean
}

const Button = ({
  text,
  disabled,
  loading,
  onClick,
  className,
  autoFocus
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`focus:outline-none focus:border-blue-500 ${
        className ? className : ""
      } border-2 rounded-full font-bold ${
        loading || disabled
          ? "bg-gray-300 text-gray-400 border-gray-300"
          : "bg-blue-900 text-gray-50 border-blue-900 hover:border-gray-400"
      }`}
      disabled={loading || disabled}
      onClick={onClick}
      autoFocus={autoFocus}
    >
      {loading ? "Loading..." : text}
    </button>
  )
}

export default Button
