import React, { useRef, useEffect, useState } from 'react'
import Vimeo from '@vimeo/player'
import ImageComp from '../ImageComp'
import ProgressiveImageComp from '../ProgressiveImageComp'

const CustomVimeoPlayer = ({ getVimeoId, width, height }) => {
  const playerRef = useRef(null)
  const [play, setPlay] = useState(false)
  const playIcon = '/Images/playIcon.svg'
  const pauseIcon = '/Images/pauseIcon.svg'
  const videoId = getVimeoId()

  const setPlayPause = () => {
    setPlay(!play)
  }

  useEffect(() => {
    // Initialize Vimeo player
    if (typeof window !== 'undefined') {
      const actualWidth = window?.innerWidth - 36 * 2

      playerRef.current = new Vimeo('player-element', {
        id: videoId,
        autopause: false, // Disable auto-pause on other players
        controls: false,
        width: actualWidth, // Set the width of the player
        // height: height,
      })

      // Set up custom play/pause button
      const playPauseButton = document.getElementById('playPauseButton')

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
    }
  }, [videoId])

  return (
    <main className="relative h-full w-full">
      <section id="player-element" className="relative">
        <section
          id="playPauseButton"
          className="absolute bottom-[12px] left-[17px] z-[1] flex  cursor-pointer items-center justify-center gap-4 text-display-11 text-textPrimary lg:bottom-5 lg:left-7"
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
          <button id="playPauseButton" className="text-display-9">
            {play ? 'PAUSE' : 'PLAY'}
          </button>
        </section>
      </section>
    </main>
  )
}

export default CustomVimeoPlayer
