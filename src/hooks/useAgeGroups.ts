import { AgeGroup, AgeGroupDisplay } from "defaults/passenger"
import { InputValue } from "types/app"

export const useAgeGroups = (): InputValue<AgeGroup>[] => {
  return [
    { value: AgeGroup.ADULT, label: AgeGroupDisplay.ADULT },
    { value: AgeGroup.CHILD, label: AgeGroupDisplay.CHILD },
    { value: AgeGroup.INFANT, label: AgeGroupDisplay.INFANT }
  ]
}
