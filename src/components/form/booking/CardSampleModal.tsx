import clsx from "clsx"
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
    <div
      className={clsx(
        "fixed top-0 flex items-center w-screen h-screen",
        "overflow-hidden backdrop-filter backdrop-blur-sm"
      )}
    >
      <dialog
        open
        className="w-full max-w-xs p-0 text-blue-900 border border-green-200 shadow rounded-3xl bg-green-50"
      >
        <Row>
          <p className="self-center font-bold text-blue-900">
            Sample Card Details
          </p>
          <button
            autoFocus
            type="button"
            onClick={onClose}
            className={clsx(
              "px-2 pb-1 mb-1 text-3xl font-semibold leading-none text-gray-400",
              "border-2 border-transparent rounded-full focus:outline-none focus:border-blue-500"
            )}
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
