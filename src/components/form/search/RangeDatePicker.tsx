import clsx from "clsx"
import TextInput from "components/common/TextInput"
import { format } from "date-fns"
import { DateFormat, PlaceholderText } from "defaults/flight"
import { Color } from "defaults/style"
import { useEffect, useRef, useState } from "react"
import { DayModifiers } from "react-day-picker"
import DayPicker from "react-day-picker/DayPicker"

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
  const [fromPickerDisplay, setFromPickerDisplay] = useState(false)
  const [toPickerDisplay, setToPickerDisplay] = useState(false)

  const fromRef = useRef<DayPicker>(null)
  const toRef = useRef<DayPicker>(null)

  const handleShowFromPicker = () => {
    setFromPickerDisplay(true)
  }

  const handleShowToPicker = () => {
    setToPickerDisplay(true)
  }

  const handleFromChange = (
    day: Date,
    _modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const attributes = e.currentTarget.attributes
    const ariaDisabled = attributes.getNamedItem("aria-disabled")
    const ariaDisabledValue = ariaDisabled?.value

    if (ariaDisabledValue === "true") return
    setFrom(format(day, DateFormat.META))
    setFromPickerDisplay(false)
    setToPickerDisplay(true)
    toRef?.current?.focus()
  }

  const handleToChange = (
    day: Date,
    _modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const attributes = e.currentTarget.attributes
    const ariaDisabled = attributes.getNamedItem("aria-disabled")
    const ariaDisabledValue = ariaDisabled?.value

    if (ariaDisabledValue === "true") return
    setTo(format(day, DateFormat.META))
    setToPickerDisplay(false)
  }

  const handleMovingFrom = (day: Date) => {
    setMovingFrom(day)
  }

  const handleMovingTo = (day: Date) => {
    setMovingTo(day)
  }

  useEffect(() => {
    if (!fromPickerDisplay) return
    fromRef?.current?.focus()
  }, [fromPickerDisplay])

  useEffect(() => {
    if (!toPickerDisplay) return
    toRef?.current?.focus()
  }, [toPickerDisplay])

  useEffect(() => {
    if (toRef.current !== null && from && !to) {
      toRef.current.focus()
    }
  }, [from, to])

  const modifiers = {
    start: dateFrom,
    end: dateTo,
    days: { before: dateNow, after: dateNow }
  }

  const modifiersStyles = {
    outside: { cursor: "default" },
    today: { width: "2.5rem", lineHeight: "1.25rem" },
    days: { width: "2.5rem", lineHeight: "1.25rem" },
    disabled: { color: Color.GRAY_400 }
  }

  return (
    <div className="flex flex-wrap w-full gap-6 md:flex-nowrap">
      <div className="relative flex flex-col items-center w-full">
        <TextInput
          name={PlaceholderText.DEPARTURE}
          className="text-center"
          onFocus={handleShowFromPicker}
          value={from ? format(new Date(from), DateFormat.DISPLAY) : ""}
          readOnly
        />
        {fromPickerDisplay ? (
          <DayPicker
            ref={fromRef}
            onDayClick={handleFromChange}
            onDayMouseEnter={handleMovingFrom}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            fromMonth={from ? dateFrom : dateNow}
            toMonth={dateTo}
            disabledDays={[{ after: dateTo }, { before: dateNow }]}
            selectedDays={[
              movingFrom || dateFrom,
              { from: movingFrom, to: dateTo }
            ]}
            className={clsx(
              "absolute z-10 w-full text-center bg-blue-900 border-2 top-16",
              "max-w-max md:w-auto whitespace-nowrap rounded-3xl text-gray-50"
            )}
          />
        ) : null}
      </div>
      <div className="relative flex flex-col items-center w-full">
        <TextInput
          name={PlaceholderText.RETURN}
          className="text-center"
          onFocus={handleShowToPicker}
          value={to ? format(new Date(to), DateFormat.DISPLAY) : ""}
          readOnly
        />
        {toPickerDisplay ? (
          <DayPicker
            ref={toRef}
            onDayClick={handleToChange}
            onDayMouseEnter={handleMovingTo}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            fromMonth={from ? dateFrom : dateNow}
            month={from ? dateFrom : dateNow}
            disabledDays={{ before: from ? dateFrom : dateNow }}
            selectedDays={[
              dateFrom,
              { from: dateFrom, to: movingTo || dateTo }
            ]}
            className={clsx(
              "absolute z-10 w-full text-center bg-blue-900 border-2 top-16",
              "max-w-max md:w-auto whitespace-nowrap rounded-3xl text-gray-50"
            )}
          />
        ) : null}
      </div>
    </div>
  )
}

export default RangeDatePicker
