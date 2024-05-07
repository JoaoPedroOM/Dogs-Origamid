import { useState, useEffect } from "react"

const useMedia = (media) => {
  const [match, setMacth] = useState(null)

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media)
      setMacth(matches)
    }

    changeMatch()
    window.addEventListener("resize", changeMatch)

    return () => window.removeEventListener("resize", changeMatch)
  }, [media])

  return match
}

export default useMedia