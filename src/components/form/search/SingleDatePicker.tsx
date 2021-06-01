import clsx from "clsx"
import TextInput from "components/TextInput"
import { format } from "date-fns"
import { DateFormat, PlaceholderText } from "defaults/flight"
import { Color } from "defaults/style"
import { useEffect, useRef, useState } from "react"
import { DayModifiers } from "react-day-picker"
import DayPicker from "react-day-picker/DayPicker"

type SingleDatePickerProps = {
  date: string
  setDate: React.Dispatch<React.SetStateAction<string>>
}

const SingleDatePicker = ({ date, setDate }: SingleDatePickerProps) => {
  const dateNow = new Date()

  const datePickerRef = useRef<DayPicker>(null)
  const [datePickerDisplay, setDatePickerDisplay] = useState(false)

  const modifiers = {
    days: { before: dateNow, after: dateNow }
  }

  const modifiersStyles = {
    outside: { cursor: "default" },
    today: { width: "2.5rem", lineHeight: "1.25rem" },
    days: { width: "2.5rem", lineHeight: "1.25rem" },
    disabled: { color: Color.GRAY_400 }
  }

  const handleShowDatePicker = () => {
    setDatePickerDisplay(true)
  }

  const handleSelectDay = (
    day: Date,
    _modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const attributes = e.currentTarget.attributes
    const ariaDisabled = attributes.getNamedItem("aria-disabled")
    const ariaDisabledValue = ariaDisabled?.value

    if (ariaDisabledValue === "true") return
    setDate(format(day, DateFormat.META))
    setDatePickerDisplay(false)
  }

  useEffect(() => {
    if (!datePickerDisplay) return
    datePickerRef?.current?.focus()
  }, [datePickerDisplay])

  return (
    <div className="relative flex flex-col items-center w-full">
      <TextInput
        name={PlaceholderText.DEPARTURE}
        className="text-center"
        onFocus={handleShowDatePicker}
        value={date ? format(new Date(date), DateFormat.DISPLAY) : ""}
        readOnly
      />
      {datePickerDisplay ? (
        <DayPicker
          ref={datePickerRef}
          onDayClick={handleSelectDay}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          fromMonth={dateNow}
          disabledDays={{ before: dateNow }}
          selectedDays={new Date(date)}
          className={clsx(
            "absolute z-10 w-full text-center bg-blue-900 border-2 top-16",
            "max-w-max md:w-auto whitespace-nowrap rounded-3xl text-gray-50"
          )}
        />
      ) : null}
    </div>
  )
}

export default SingleDatePicker
