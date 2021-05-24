type SearchButtonProps = {
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SearchButton = ({ disabled, onClick }: SearchButtonProps) => {
  return (
    <button
      type="button"
      className={`focus:outline-none focus:border-blue-500
      border-2 rounded-full h-14 w-1/4 font-bold ${
        disabled
          ? "bg-gray-300 text-gray-400 border-gray-300"
          : "bg-blue-900 text-gray-50 border-blue-900 hover:border-gray-400"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      Search
    </button>
  )
}

export default SearchButton
