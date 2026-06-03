import { useState, useEffect } from 'react'

export function useTypewriter(words, speed = 100, pause = 2000) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    if (!words || words.length === 0) return

    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), pause)
      return
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
      setText(words[index].substring(0, subIndex))
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words, speed, pause])

  return text
}
