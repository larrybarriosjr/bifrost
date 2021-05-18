import dateFnsFormat from "date-fns/format"
import dateFnsParse from "date-fns/parse"
import { useEffect, useRef, useState } from "react"
import { DateUtils } from "react-day-picker"
import DayPickerInput from "react-day-picker/DayPickerInput"

type RangeDatePickerProps = {
  from: string
  to: string
  setFrom: React.Dispatch<React.SetStateAction<string>>
  setTo: React.Dispatch<React.SetStateAction<string>>
}

const RangeDatePicker = ({
  from,
  to,
  setFrom,
  setTo
}: RangeDatePickerProps) => {
  const dateNow = new Date()
  const dateFrom = new Date(from)
  const dateTo = new Date(to)

  const [movingFrom, setMovingFrom] = useState<Date | null>(null)
  const [movingTo, setMovingTo] = useState<Date | null>(null)
  const toRef = useRef<DayPickerInput>(null)

  const DATE_FORMAT_INPUT = "dd MMMM y"
  const DATE_FORMAT_STATE = "yyyy-MM-dd"

  const handleFromChange = (day: Date) => {
    if (day instanceof Date) {
      const formattedDate = dateFnsFormat(day, DATE_FORMAT_STATE)
      setFrom(formattedDate)
    }
  }

  const handleToChange = (day: Date) => {
    if (day instanceof Date) {
      const formattedDate = dateFnsFormat(day, DATE_FORMAT_STATE)
      setTo(formattedDate)
    }
  }

  const handleMovingFrom = (day: Date) => {
    setMovingFrom(day)
  }

  const handleMovingTo = (day: Date) => {
    setMovingTo(day)
  }

  const handleResetMovingTo = () => {
    setMovingTo(null)
  }

  useEffect(() => {
    if (toRef.current !== null && from && !to) {
      toRef.current.getInput().focus()
    }
  }, [from, to])

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
    start: dateFrom,
    end: dateTo,
    days: { before: dateNow, after: dateNow }
  }

  const modifiersStyles = {
    outside: { cursor: "default" },
    today: { width: "2.5rem", lineHeight: "1.25rem" },
    days: { width: "2.5rem", lineHeight: "1.25rem" },
    disabled: { color: "#9CA3AF" }
  }

  return (
    <>
      <DayPickerInput
        placeholder="Departure Date"
        onDayChange={handleFromChange}
        format={DATE_FORMAT_INPUT}
        formatDate={formatDate}
        parseDate={parseDate}
        inputProps={{
          readOnly: true,
          className: from ? "font-bold" : ""
        }}
        dayPickerProps={{
          modifiers,
          modifiersStyles,
          fromMonth: dateFrom,
          toMonth: dateTo,
          disabledDays: [{ after: dateTo }, { before: dateNow }],
          selectedDays: [
            movingFrom || dateFrom,
            { from: movingFrom, to: dateTo }
          ],
          onDayMouseEnter: handleMovingFrom
        }}
      />
      <DayPickerInput
        ref={toRef}
        placeholder="Return Date"
        onDayChange={handleToChange}
        onDayPickerHide={handleResetMovingTo}
        format={DATE_FORMAT_INPUT}
        formatDate={formatDate}
        parseDate={parseDate}
        inputProps={{
          readOnly: true,
          className: to ? "font-bold" : ""
        }}
        dayPickerProps={{
          modifiers,
          modifiersStyles,
          fromMonth: from ? dateFrom : dateNow,
          month: from ? dateFrom : dateNow,
          disabledDays: { before: from ? dateFrom : dateNow },
          selectedDays: [dateFrom, { from: dateFrom, to: movingTo || dateTo }],
          onDayMouseEnter: handleMovingTo
        }}
      />
    </>
  )
}

export default RangeDatePicker
