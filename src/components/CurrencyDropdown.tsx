import { useLocalStorage } from "hooks/useLocalStorage"
import { useEffect } from "react"
import { useQuery } from "react-query"
import Select, { ActionMeta } from "react-select"
import { getCurrencies } from "services/skyscanner"
import { Currency } from "types/skyscanner"

const CurrencyDropdown = () => {
  const [currency, setCurrency] = useLocalStorage("currency", "")
  const { data: currencies, refetch: fetchCurrencies } = useQuery(
    "currencies",
    getCurrencies,
    { enabled: false }
  )

  useEffect(() => {
    if (!currency) setCurrency("USD")
  }, [currency, setCurrency])

  useEffect(() => {
    if (!currencies) fetchCurrencies()
  }, [currencies, fetchCurrencies])

  const formatOptionLabel = (c: Currency) => {
    return `${c.Code} - ${c.Symbol}`
  }

  const handleChange = (
    value: Currency | null,
    action: ActionMeta<Currency>
  ) => {
    if (value && action.action === "select-option") {
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
      className="w-40"
      styles={{
        control: base => ({
          ...base,
          backgroundColor: "#A7F3D0",
          borderRadius: "50px",
          borderColor: "#A7F3D0",
          borderWidth: "2px",
          padding: "0.5rem"
        }),
        singleValue: base => ({
          ...base,
          color: "#1E3A8A",
          fontWeight: "bold"
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

export default CurrencyDropdown
