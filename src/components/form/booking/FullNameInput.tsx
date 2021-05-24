import { PassengerData } from "types/app"

type FullNameInputProps = {
  id: number
  fullName: string
  setFullName: React.Dispatch<React.SetStateAction<PassengerData[]>>
}

const FullNameInput = ({ id, fullName, setFullName }: FullNameInputProps) => {
  const otherData = (arr: PassengerData[]) => arr.filter(p => p.id !== id)
  const thisData = (arr: PassengerData[]) => arr.filter(p => p.id === id)[0]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(prev => [
      ...otherData(prev),
      { ...thisData(prev), fullName: e.target.value }
    ])
  }

  return (
    <input
      placeholder="Full Name"
      className={`${
        fullName ? "font-bold" : "font-light"
      } bg-green-200 border-green-200 border-2 rounded-full h-14 w-7/12 px-4 text-blue-900
        focus:outline-none hover:border-gray-400 focus:border-blue-500`}
      onChange={handleChange}
      value={fullName}
    />
  )
}

export default FullNameInput
