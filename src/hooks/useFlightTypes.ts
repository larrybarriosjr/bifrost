import { FlightType, FlightTypeDisplay } from "defaults/flight"
import { InputValue } from "types/app"

export const useFlightTypes = (): InputValue<string>[] => {
  return [
    { value: FlightType.ONE_WAY, label: FlightTypeDisplay.ONE_WAY },
    { value: FlightType.ROUND_TRIP, label: FlightTypeDisplay.ROUND_TRIP }
  ]
}
