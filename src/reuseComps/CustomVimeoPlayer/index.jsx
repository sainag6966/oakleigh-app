import React, { useRef, useEffect, useState } from 'react'
import Vimeo from '@vimeo/player'
import ProgressiveImageComp from '../ProgressiveImageComp'

const CustomVimeoPlayer = ({ getVimeoId, width, height, videoId }) => {
  const playerRef = useRef(null)
  const [play, setPlay] = useState(false)
  const playIcon = '/Images/playIcon.svg'
  const pauseIcon = '/Images/pauseIcon.svg'

  // Generate unique IDs for each instance
  const playerElementId = `player-element-${videoId}`
  const playPauseButtonId = `playPauseButton-${videoId}`

  const setPlayPause = () => {
    setPlay(!play)
  }

  useEffect(() => {
    // Initialize Vimeo player
    playerRef.current = new Vimeo(playerElementId, {
      id: videoId,
      autopause: false,
      controls: false,
      width: width,
      height: height,
    })

    // Set up custom play/pause button
    const playPauseButton = document.getElementById(playPauseButtonId)

    playPauseButton.addEventListener('click', () => {
      playerRef.current.getPaused().then((paused) => {
        if (paused) {
          playerRef.current.play()
        } else {
          playerRef.current.pause()
        }
      })
    })

    // Cleanup on component unmount
    return () => {
      playerRef.current.destroy()
      playPauseButton.removeEventListener('click', () => {})
    }
  }, [videoId, playerElementId, playPauseButtonId])

  return (
    <main className="relative h-full w-full">
      <section id={playerElementId} className="relative">
        <section
          id={playPauseButtonId}
          className="absolute bottom-[12px] left-[17px] z-[1] flex cursor-pointer items-center justify-center gap-4 text-display-11 text-textPrimary lg:bottom-5 lg:left-7"
          onClick={setPlayPause}
        >
          <section className="flex h-8 w-8 items-center justify-center rounded-[20px] border-[1px] border-textPrimary lg:h-10 lg:w-10">
            <figure
              className={`relative ${play ? 'ml-0' : 'ml-[2px]'} h-3 w-3`}
            >
              <ProgressiveImageComp
                src={play ? pauseIcon : playIcon}
                alt={'play/pause'}
              />
            </figure>
          </section>
          <button className="text-display-9">{play ? 'PAUSE' : 'PLAY'}</button>
        </section>
      </section>
    </main>
  )
}

export default CustomVimeoPlayer
