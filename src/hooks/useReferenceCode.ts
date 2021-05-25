import { LocalStorageKey } from "defaults/web"
import { useEffect } from "react"
import { getRandomCharacters } from "services/random"
import { useLocalStorage } from "./useLocalStorage"

export const useReferenceCode = (): string => {
  const [reference, setReference] = useLocalStorage<string>(
    LocalStorageKey.REFERENCE,
    ""
  )

  useEffect(() => {
    const fetchReferenceCode = async () => {
      const data = await getRandomCharacters()
      setReference(data)
    }

    if (!reference) fetchReferenceCode()
  }, [reference, setReference])

  return reference
}
