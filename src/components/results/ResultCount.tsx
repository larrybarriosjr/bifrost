import { InitialFlightData } from "defaults/flight"
import { pluralize } from "utils/string"

type ResultCountProps = {
  amount: number
}

const ResultCount = ({
  amount = InitialFlightData.RESULTS
}: ResultCountProps) => {
  return (
    <p className="font-bold text-blue-900">
      {pluralize("Result", amount)} ({amount})
    </p>
  )
}

export default ResultCount
