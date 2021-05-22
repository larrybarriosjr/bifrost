import { Honorific, HonorificDisplay } from "defaults/passenger"
import { InputValue } from "types/app"

export const useHonorifics = (): InputValue<Honorific>[] => {
  return [
    { value: Honorific.MR, label: HonorificDisplay.MR },
    { value: Honorific.MS, label: HonorificDisplay.MS },
    { value: Honorific.MRS, label: HonorificDisplay.MRS }
  ]
}
