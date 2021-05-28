type ButtonProps = {
  text: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

const Button = ({ text, disabled, onClick, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`focus:outline-none focus:border-blue-500 ${
        className ? className : ""
      } border-2 rounded-full font-bold ${
        disabled
          ? "bg-gray-300 text-gray-400 border-gray-300"
          : "bg-blue-900 text-gray-50 border-blue-900 hover:border-gray-400"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
