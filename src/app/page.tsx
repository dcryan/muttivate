"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Button({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-solid border-black basis-1/2 md:basis-1/3 lg:basis-1/4"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default function Home() {
  const [focusAudio, setFocusAudio] = useState<HTMLAudioElement>()
  const [youGotThisAudio, setYouGotThisAudio] = useState<HTMLAudioElement>()


  useEffect(() => {
    setFocusAudio(new Audio('https://d1xljvb3evuv0v.cloudfront.net/bella-focus.mp3'))
    setYouGotThisAudio(new Audio('https://d1xljvb3evuv0v.cloudfront.net/elli-you-got-this.mp3'))
  }, [])

  if (!focusAudio || !youGotThisAudio) {
    return null
  }

  return (
    <main className="flex min-h-screen flex-row items-stretch justify-between flex-wrap">
      <Button onClick={() => youGotThisAudio.play()}>
        You got this!
      </Button>
      <Button onClick={() => focusAudio.play()}>
        Focus
      </Button>
      <Button onClick={() => youGotThisAudio.play()}>
        You got this!
      </Button>
      <Button onClick={() => focusAudio.play()}>
        Focus
      </Button>
      <Button onClick={() => youGotThisAudio.play()}>
        You got this!
      </Button>
      <Button onClick={() => focusAudio.play()}>
        Focus
      </Button>
    </main>
  )
}
