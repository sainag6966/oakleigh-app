import React, { useCallback, useEffect, useState, useRef } from 'react'
import styles from '../../styles/doubleRange.module.css'
import { priceFormatter } from '@/utils/formatPrice'

const MultiRangeSlider = ({ min, max, onChange, preText, postText }) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)
  const formattedMaxVal = preText === '£' ? priceFormatter(max, false) : max
  const prevText = preText !== '£' ? preText : ''

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])

  return (
    <div className="relative flex h-auto w-full flex-col gap-5">
      <div className="relative h-auto w-full">
        <div className={styles.sliderTrack} />
        <div ref={range} className={styles.sliderRange} />
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1)
            setMinVal(value)
            minValRef.current = value
          }}
          className={`${styles.thumb} ${styles.thumbLeft}`}
          style={{ zIndex: minVal > max - 100 && '5' }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1)
            setMaxVal(value)
            maxValRef.current = value
          }}
          className={`${styles.thumb} ${styles.thumbRight}`}
        />
      </div>
      <div className="relative flex h-auto w-full justify-between font-sans">
        <div className="">
          {preText}
          {min}
          {postText}
        </div>
        <div className="flex gap-[6px] font-semibold">
          <div>
            {preText}
            {minVal}
            {postText}
          </div>
          <p>-</p>
          <div>
            {prevText}
            {formattedMaxVal}
            {postText}
          </div>
        </div>
        <div className="">
          {prevText}
          {formattedMaxVal}
          {postText}
        </div>
      </div>
    </div>
    // <div className={styles.container}>
    //   <input
    //     type="range"
    //     min={min}
    //     max={max}
    //     value={minVal}
    //     onChange={(event) => {
    //       const value = Math.min(Number(event.target.value), maxVal - 1)
    //       setMinVal(value)
    //       minValRef.current = value
    //     }}
    //     className={`${styles.thumb} ${styles.thumbLeft}`}
    //     style={{ zIndex: minVal > max - 100 && '5' }}
    //   />
    //   <input
    //     type="range"
    //     min={min}
    //     max={max}
    //     value={maxVal}
    //     onChange={(event) => {
    //       const value = Math.max(Number(event.target.value), minVal + 1)
    //       setMaxVal(value)
    //       maxValRef.current = value
    //     }}
    //     className={`${styles.thumb} ${styles.thumbRight}`}
    //   />

    //   <div className={styles.slider}>
    //     <div className={styles.sliderTrack} />
    //     <div ref={range} className={styles.sliderRange} />
    //     <div>
    //       <div className={`font-sans ${styles.sliderLeftValue}`}>
    //         {preText}
    //         {min}
    //         {postText}
    //       </div>
    //       <div className={`font-sans ${styles.sliderLeftMin}`}>
    //         <div className="font-sans">
    //           {preText}
    //           {minVal}
    //           {postText}
    //         </div>
    //         <p>-</p>
    //         <div className="font-sans">
    //           {preText}
    //           {maxVal}
    //           {postText}
    //         </div>
    //       </div>
    //       <div className={`font-sans ${styles.sliderRightValue}`}>
    //         {preText}
    //         {max}
    //         {postText}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

// MultiRangeSlider.propTypes = {
//   min: PropTypes.number.isRequired,
//   max: PropTypes.number.isRequired,
//   onChange: PropTypes.func.isRequired
// };

export default MultiRangeSlider
