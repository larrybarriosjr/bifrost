import { ReactSelectAction } from "defaults/lib"
import { Color } from "defaults/style"
import { useCurrencies } from "hooks/useCurrencies"
import Select, { ActionMeta } from "react-select"
import { Currency } from "types/skyscanner"

type CurrencyDropdownProps = {
  currency: string
  setCurrency: React.Dispatch<React.SetStateAction<string>>
}

const CurrencyDropdown = ({ currency, setCurrency }: CurrencyDropdownProps) => {
  const currencies = useCurrencies()

  const formatOptionLabel = (c: Currency) => {
    return `${c.Code} - ${c.Symbol}`
  }

  const handleChange = (
    value: Currency | null,
    action: ActionMeta<Currency>
  ) => {
    if (value && action.action === ReactSelectAction.SELECT) {
      return setCurrency(value.Code)
    }
    setCurrency("")
  }

  return (
    <Select
      options={currencies}
      onChange={handleChange}
      formatOptionLabel={formatOptionLabel}
      getOptionValue={value => value.Code}
      value={currencies?.find(c => c.Code === currency)}
      className="w-1/4"
      styles={{
        control: base => ({
          ...base,
          backgroundColor: Color.GREEN_200,
          borderRadius: "50px",
          borderColor: Color.GREEN_200,
          borderWidth: "2px",
          padding: "0.5rem"
        }),
        singleValue: base => ({
          ...base,
          color: Color.BLUE_900,
          fontWeight: "bold"
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

export default CurrencyDropdown
