import clsx from "clsx"

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
      className={clsx(
        "font-bold border-2 rounded-full focus:outline-none focus:border-blue-500",
        loading || disabled
          ? "text-gray-400 bg-gray-300 border-gray-300"
          : "bg-blue-900 border-blue-900 text-gray-50 hover:border-gray-400",
        className
      )}
      disabled={loading || disabled}
      onClick={onClick}
      autoFocus={autoFocus}
    >
      {loading ? "Loading..." : text}
    </button>
  )
}

export default Button
