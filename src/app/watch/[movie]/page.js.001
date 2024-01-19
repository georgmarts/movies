'use client'

import { useRef, useState, useEffect } from 'react'
import './watch.style.css'

export default function EpisodePage({params}) {

    const videoContainer = useRef()
    const video = useRef()
    const timeline = useRef()
    const [volume, setVolume] = useState()
    const [lastVol, setLastVol] = useState()
    const [isPaused, setIsPaused] = useState(true)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [playbackRate, setPlaybackRate] = useState(0)
    const [isPlaybakRateChanged, setisPlaybakRateChanged] = useState(false)
    const [forwardMenu, setForwardMenu] = useState(false)
    const [mouseStatus, setMouseStatus] = useState(false)
    const [scrollOffset, setScrollOffset] = useState(0)
    const [bufferOffset, setBufferOffset] = useState(0)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [isWidescreenOn, setIsWidescreenOn] = useState(false)
    const movieTitle = params.movie

    useEffect(() => {
      setVolume(video.current.volume)
      setDuration(video.current.duration)
      setPlaybackRate(video.current.playbackRate)
    }, [isPlaybakRateChanged])

    function updateVideoValues() {
      setCurrentTime(video.current.currentTime)
      setScrollOffset(video.current.currentTime/(video.current.duration/100))
      setBufferOffset(video.current.buffered.end(0)/(video.current.duration/100))
    }

    function play() {
      video.current.play()
      setIsPaused(video.current.paused)
    }

    function handleScrClick() {
      isPaused ? play() : pause()
    }

    function pause() {
      video.current.pause()
      setIsPaused(video.current.paused)
    }

    function mute() {
      setLastVol(video.current.volume)
      volume > 0 ? (video.current.volume = 0, setVolume(0)) : (video.current.volume = lastVol, setVolume(lastVol))
    }
    
    function changeVolume(e) {
      video.current.volume = e.target.value
      video.current.muted = false
    }

    function setPlaybackSpeed(arg) {
      video.current.playbackRate = arg
      setisPlaybakRateChanged(prev => !prev)
    }

    // CURRENT TIMELINE

    let seconds = Math.floor(currentTime%60)
    if(seconds < 10) {seconds = seconds.toString().padStart(2, '0')}
    let minutes = Math.floor(currentTime/60)%60
    if(minutes < 10) {minutes = minutes.toString().padStart(2, '0')}
    const hours = Math.floor(currentTime/3600)

    // TOTAL TIMELINE

    let secondsT = Math.floor(duration%60)
    if(secondsT < 10) {secondsT = seconds.toString().padStart(2, '0')}
    let minutesT = Math.floor(duration/60)%60
    if(minutesT < 10) {minutesT = minutesT.toString().padStart(2, '0')}
    const hoursT = Math.floor(duration/3600)

    function handlePictureinPicture() {
      video.current.requestPictureInPicture()
    }

    function handleWideScreenClick() {
      setIsWidescreenOn(prev => !prev)
      videoContainer.current.classList.toggle('widescreen')
    }

    function handleFullScrClick() {
      setIsFullScreen(prev => !prev)
      isFullScreen ?  document.exitFullscreen() : videoContainer.current.requestFullscreen()
    }

    // FORWARD - BACKWARD

    function handleMouseDown() {
      setMouseStatus(true)
    }
  
    function handleMouseMove(e) {
      if(!mouseStatus) return;
      e.preventDefault()
      const offsetLeft = timeline.current.getBoundingClientRect().left
      const step = (e.pageX - offsetLeft)*100/timeline.current.offsetWidth // formula PERCENT = (X*100)/Y
      video.current.currentTime = duration*step/100 // formula P% FROM Y: X = (Y*P)/100
    }
  
    function handleMouseLeave() {
      setMouseStatus(false)
    }

    function handleMouseClick(e) {
      const offsetLeft = timeline.current.getBoundingClientRect().left
      const step = (e.pageX - offsetLeft)*100/timeline.current.offsetWidth // formula PERCENT = (X*100)/Y
      video.current.currentTime = duration*step/100 // formula P% FROM Y: X = (Y*P)/100
    }
    
    const containerStyle = {
      left: `calc(${scrollOffset}% - 100%)`,
    }

    const bufferStyle = {
      left: `calc(${bufferOffset}% - 100%)`,
    }

    const videoWidthInFullScr = {
      width: '100%',
    }

  return (
    <div className='video-container' ref={videoContainer} onDoubleClick={handleFullScrClick} onMouseMove={handleMouseMove} onMouseUp={handleMouseLeave} onMouseLeave={handleMouseLeave}>
        {isFullScreen && <div className="top-title-container">
          <p>{movieTitle}</p>
        </div>}  
        <div className="control-panel">
        <div className='timeline' ref={timeline} onMouseDown={handleMouseDown} onClick={handleMouseClick}>
          <div className="timeline-buffer" style={bufferStyle}></div>
          <div className="timeline-slider" style={containerStyle}>
            <div className="timeline-slider-tail"></div>
            {mouseStatus && <div className="timeline-slider-head"></div>}
          </div>
          </div>
          <div className="btn-container">
          {isPaused && <svg className='player-btn' onClick={play} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"/></svg>}
          {!isPaused && <svg className="player-btn" onClick={pause} viewBox="0 0 24 24">
            <path d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>}
          <svg className='player-btn next-btn' viewBox="0 0 36 36"><path d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"/></svg>
          {volume === 0 && <svg className='player-btn volume' onClick={mute} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" /></svg>}
          {volume <= 0.5 && volume > 0 && <svg className='player-btn volume' onClick={mute} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" /></svg>}
          {volume > 0.5 && <svg className='player-btn volume' onClick={mute} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>}
          <div className='volume-range'><input value={volume} type='range' min="0" max="1" step='.01' onChange={changeVolume}/></div>
          <div className="time-container">
            {<p>{hours}:{minutes}:{seconds} / {hoursT}:{minutesT}:{secondsT}</p>}
          </div>
          </div>
          <div className="last-container">
            <div className="forward-container">
              <div style={forwardMenu ? {opacity: '1'} : null} className="forward-btn" onClick={() => setForwardMenu(prev => !prev)}>{playbackRate}x</div>
              {forwardMenu && <div className="forward-dropup">
                <div className="forward-value" onClick={() => setPlaybackSpeed(2)}>2x</div>
                <div className="forward-value" onClick={() => setPlaybackSpeed(1.5)}>1.5x</div>
                <div className="forward-value" onClick={() => setPlaybackSpeed(1)}>1x</div>
                <div className="forward-value" onClick={() => setPlaybackSpeed(0.75)}>0.75x</div>
                <div className="forward-value" onClick={() => setPlaybackSpeed(0.5)}>0.5x</div>
              </div>}
            </div>
            <div className='player-btn mini-player' onClick={handlePictureinPicture}>
              <svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/></svg>
            </div>
            <div className={isWidescreenOn ? 'widescreen-on widescreen-btn' : 'widescreen-off widescreen-btn'} onClick={handleWideScreenClick}></div>
              <svg className='player-btn fullscr-btn' onClick={handleFullScrClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>
          </div>
        </div>
        <video ref={video} style={isFullScreen ? videoWidthInFullScr : null} className="video" src='/video2.mp4' onClick={handleScrClick} onTimeUpdate={updateVideoValues} onVolumeChange={() => setVolume(video.current.volume)}/>
    </div>)
}
