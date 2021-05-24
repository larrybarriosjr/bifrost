import dateFnsFormat from "date-fns/format"
import dateFnsParse from "date-fns/parse"
import { DateFormat, PlaceholderText } from "defaults/flight"
import { Color } from "defaults/style"
import { DateUtils } from "react-day-picker"
import DayPickerInput from "react-day-picker/DayPickerInput"

type SingleDatePickerProps = {
  date: string
  setDate: React.Dispatch<React.SetStateAction<string>>
}

const SingleDatePicker = ({ date, setDate }: SingleDatePickerProps) => {
  const dateNow = new Date()

  const handleDayChange = (day: Date) => {
    if (day instanceof Date) {
      const formattedDate = dateFnsFormat(day, DateFormat.META)
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
    disabled: { color: Color.GRAY_400 }
  }

  return (
    <DayPickerInput
      placeholder={PlaceholderText.DEPARTURE}
      onDayChange={handleDayChange}
      format={DateFormat.DISPLAY}
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
