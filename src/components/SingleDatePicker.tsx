import DayPickerInput from "react-day-picker/DayPickerInput"
import { DateUtils, DayPickerInputProps } from "react-day-picker"
import dateFnsFormat from "date-fns/format"
import dateFnsParse from "date-fns/parse"

type SingleDatePickerProps = DayPickerInputProps & {
  date: string
  setDate: React.Dispatch<React.SetStateAction<string>>
}

const SingleDatePicker = ({
  date,
  setDate,
  ...props
}: SingleDatePickerProps) => {
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
    const parsedDate = dateFnsParse(str, format, new Date())
    if (DateUtils.isDate(parsedDate)) {
      return parsedDate
    }
  }

  const modifiers = {
    days: { before: new Date(), after: new Date() }
  }

  const modifiersStyles = {
    outside: { cursor: "pointer" },
    today: { width: "2.5rem", lineHeight: "1.25rem" },
    days: { width: "2.5rem", lineHeight: "1.25rem" }
  }

  return (
    <DayPickerInput
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
        fromMonth: new Date(),
        showOutsideDays: true,
        enableOutsideDaysClick: true
      }}
      {...props}
    />
  )
}

export default SingleDatePicker
