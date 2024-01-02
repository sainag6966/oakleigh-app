import React, { useRef, useEffect } from 'react'
import Vimeo from '@vimeo/player'

const CustomVimeoPlayer = ({ videoId, width, height }) => {
  const playerRef = useRef(null)

  useEffect(() => {
    // Initialize Vimeo player
    playerRef.current = new Vimeo('player-element', {
      id: videoId,
      autopause: false, // Disable auto-pause on other players
      controls: false,
      width: width, // Set the width of the player
      height: height,
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
  }, [videoId])

  return (
    <div className="relativeh-full w-full">
      <div id="player-element"></div>
      <button id="playPauseButton">Play/Pause</button>
    </div>
  )
}

export default CustomVimeoPlayer
