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
  const [audio, setAudio] = useState<HTMLAudioElement>()

  useEffect(() => {
    setAudio(new Audio())
  }, [])

  if (!audio) {
    return null
  }

  return (
    <main className="flex min-h-screen flex-row items-stretch justify-between flex-wrap">
      <Button onClick={() => audio.play()}>
        You got this!
      </Button>
      <Button>
        Focus
      </Button>
      <Button>
        You got this!
      </Button>
      <Button>
        Focus
      </Button>
      <Button>
        You got this!
      </Button>
      <Button>
        Focus
      </Button>
    </main>
  )
}
