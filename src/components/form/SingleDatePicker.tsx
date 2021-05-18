import dateFnsFormat from "date-fns/format"
import dateFnsParse from "date-fns/parse"
import { DateUtils } from "react-day-picker"
import DayPickerInput from "react-day-picker/DayPickerInput"

type SingleDatePickerProps = {
  date: string
  setDate: React.Dispatch<React.SetStateAction<string>>
}

const SingleDatePicker = ({ date, setDate }: SingleDatePickerProps) => {
  const dateNow = new Date()

  const DATE_FORMAT_INPUT = "dd MMMM y"
  const DATE_FORMAT_STATE = "yyyy-MM-dd"

  const handleDayChange = (day: Date) => {
    if (day instanceof Date) {
      const formattedDate = dateFnsFormat(day, DATE_FORMAT_STATE)
      setDate(formattedDate)
    }
  }

  const formatDate = (date: Date, format: string) => {
    return dateFnsFormat(date, format)
  }

  const parseDate = (str: string, format: string) => {
    const parsedDate = dateFnsParse(str, format, dateNow)
    if (DateUtils.isDate(parsedDate)) {
      return parsedDate
    }
  }

  const modifiers = {
    days: { before: dateNow, after: dateNow }
  }

  const modifiersStyles = {
    outside: { cursor: "default" },
    today: { width: "2.5rem", lineHeight: "1.25rem" },
    days: { width: "2.5rem", lineHeight: "1.25rem" },
    disabled: { color: "#9CA3AF" }
  }

  return (
    <DayPickerInput
      placeholder="Departure Date"
      onDayChange={handleDayChange}
      format={DATE_FORMAT_INPUT}
      formatDate={formatDate}
      parseDate={parseDate}
      inputProps={{
        readOnly: true,
        className: date ? "font-bold" : ""
      }}
      dayPickerProps={{
        modifiers,
        modifiersStyles,
        fromMonth: dateNow,
        disabledDays: { before: dateNow }
      }}
    />
  )
}

export default SingleDatePicker
