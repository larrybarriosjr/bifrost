type ResultCountProps = {
  amount: number
}

const ResultCount = ({ amount = 0 }: ResultCountProps) => {
  return (
    <p className="font-bold text-blue-900">
      {amount <= 1 ? "Result" : "Results"} ({amount})
    </p>
  )
}

export default ResultCount
