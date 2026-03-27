import { useEffect, useRef, useState } from "react"

export function useStopwatch() {
  const [seconds, setSeconds] = useState<number>(0)
  const intervalRef = useRef<number | null>(null)

  const start = () => {
    if (intervalRef.current !== null) return

    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
  }

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const reset = () => {
    stop()
    setSeconds(0)
  }

  useEffect(() => {
    return () => stop() // cleanup
  }, [])

  return { seconds, start, stop, reset }
}

