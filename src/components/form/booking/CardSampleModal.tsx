import Row from "containers/Row"
import { useEffect } from "react"
import { createPortal } from "react-dom"

type CardSampleModalProps = {
  show: boolean
  onClose: () => void
}

const CardSampleModal = ({ show, onClose }: CardSampleModalProps) => {
  useEffect(() => {
    if (!show) return
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [show])

  if (!show) return null

  return createPortal(
    <div className="flex items-center fixed overflow-hidden top-0 w-screen h-screen backdrop-filter backdrop-blur-sm">
      <dialog
        open
        className="w-full max-w-xs p-0 rounded-3xl shadow border border-green-200 bg-green-50 text-blue-900"
      >
        <Row>
          <p className="font-bold text-blue-900 self-center">
            Sample Card Details
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-3xl font-semibold text-gray-400 pb-2"
          >
            ×
          </button>
        </Row>
        <Row>
          <p>
            Card Number: <span className="font-bold">4242 4242 4242 4242</span>
          </p>
        </Row>
        <Row>
          <p>
            Expiry Date: <span className="font-bold">Any Future Date</span>
          </p>
        </Row>
        <Row>
          <p>
            CVC & Zip Code: <span className="font-bold">Any Digits</span>
          </p>
        </Row>
      </dialog>
    </div>,
    document.body
  )
}

export default CardSampleModal
