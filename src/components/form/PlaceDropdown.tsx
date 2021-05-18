import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import debounce from "lodash.debounce"
import { Dispatch, SetStateAction } from "react"
import AsyncSelect from "react-select/async"
import { Option } from "react-select/src/filters"
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
  const currency = useCurrencyCode()

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
    return `${opt.PlaceName} (${opt.PlaceId.replaceAll("-sky", "")})`
  }

  const filterOption = (opt: Option) => {
    return opt.data.CityId !== "-sky"
  }

  const loadingMessage = () => {
    return "Searching..."
  }

  const handleChange = (
    value: QueryPlace | null,
    action: ActionMeta<QueryPlace>
  ) => {
    if (value && action.action === "select-option") {
      return setValue(value.PlaceId)
    }
    setValue("")
  }

  return (
    <AsyncSelect
      loadOptions={fetchOptions}
      formatOptionLabel={formatOptionLabel}
      filterOption={filterOption}
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
          backgroundColor: "#A7F3D0",
          borderRadius: "50px",
          borderColor: "#A7F3D0",
          borderWidth: "2px",
          padding: "0.5rem"
        }),
        input: base => ({
          ...base,
          color: "#1E3A8A"
        }),
        singleValue: base => ({
          ...base,
          color: "#1E3A8A",
          fontWeight: "bold"
        }),
        placeholder: base => ({
          ...base,
          color: "#1E3A8A"
        }),
        clearIndicator: base => ({
          ...base,
          color: "#4B5563"
        }),
        indicatorSeparator: base => ({
          ...base,
          backgroundColor: "#4B5563"
        }),
        dropdownIndicator: base => ({
          ...base,
          color: "#4B5563"
        })
      }}
    />
  )
}

export default PlaceDropdown