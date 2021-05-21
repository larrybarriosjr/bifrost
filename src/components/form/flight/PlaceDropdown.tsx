import { LoadingText } from "defaults/flight"
import { ReactSelectAction } from "defaults/lib"
import { Color } from "defaults/style"
import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import debounce from "lodash.debounce"
import { Dispatch, SetStateAction } from "react"
import AsyncSelect from "react-select/async"
import { ActionMeta } from "react-select/src/types"
import { getPlaces } from "services/skyscanner"
import { ReactSelectCallback, ReactSelectReturn } from "types/app"
import { QueryPlace } from "types/skyscanner"

type PlaceDropdownProps = {
  placeholder: string
  setValue: Dispatch<SetStateAction<string>>
}

const PlaceDropdown = ({ placeholder, setValue }: PlaceDropdownProps) => {
  const country = useCountryCode()
  const [currency] = useCurrencyCode()

  const debouncedOptions = debounce(
    async (input: string, callback: ReactSelectCallback<QueryPlace>) => {
      callback(await getPlaces({ query: input, country, currency }))
    },
    500
  )

  const fetchOptions = (
    input: string,
    callback: ReactSelectCallback<QueryPlace>
  ): ReactSelectReturn<QueryPlace> => {
    if (!input) return Promise.resolve([])
    debouncedOptions(input, callback)
  }

  const formatOptionLabel = (opt: QueryPlace) => {
    return opt.PlaceName
  }

  const loadingMessage = () => {
    return LoadingText.PLACE
  }

  const handleChange = (
    value: QueryPlace | null,
    action: ActionMeta<QueryPlace>
  ) => {
    if (value && action.action === ReactSelectAction.SELECT) {
      return setValue(value.PlaceId)
    }
    setValue("")
  }

  return (
    <AsyncSelect
      loadOptions={fetchOptions}
      formatOptionLabel={formatOptionLabel}
      loadingMessage={loadingMessage}
      onChange={handleChange}
      placeholder={placeholder}
      isClearable
      styles={{
        container: base => ({
          ...base,
          width: "100%"
        }),
        control: base => ({
          ...base,
          backgroundColor: Color.GREEN_200,
          borderRadius: "50px",
          borderColor: Color.GREEN_200,
          borderWidth: "2px",
          padding: "0.5rem"
        }),
        input: base => ({
          ...base,
          color: Color.BLUE_900
        }),
        singleValue: base => ({
          ...base,
          color: Color.BLUE_900,
          fontWeight: "bold"
        }),
        placeholder: base => ({
          ...base,
          color: Color.BLUE_900
        }),
        clearIndicator: base => ({
          ...base,
          color: Color.GRAY_600
        }),
        indicatorSeparator: base => ({
          ...base,
          backgroundColor: Color.GRAY_600
        }),
        dropdownIndicator: base => ({
          ...base,
          color: Color.GRAY_600
        })
      }}
    />
  )
}

export default PlaceDropdown
