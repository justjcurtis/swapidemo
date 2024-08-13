import { useCallback, useEffect, useRef, useState } from "react"
import { getRandomInt } from "../utils/helpers"

const TWINKLE_RATE = 0.0015

const styles = {
  wrapper: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '8px 0',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    zIndex: -10,
  },
  star: {
    position: 'fixed',
    backgroundColor: 'white',
    transition: 'opacity 0.3s',
    zIndex: -5,

  }
}

const StarryNight = ({ children }) => {
  const maxDimension = Math.max(window.screen.width, window.screen.height)
  const randomXY = () => ({ x: getRandomInt(maxDimension), y: getRandomInt(maxDimension * 2) })
  const starCount = useRef(Math.floor((maxDimension * maxDimension * 1.5) / 10000))

  const twinkling = useRef(new Array(starCount.current).fill(undefined))
  const [stars, setStars] = useState(new Array(starCount.current).fill(0)
    .map(() => ({ ...randomXY(), size: getRandomInt(2, 0.5), opacity: 1 })))

  const draw = useCallback(() => {
    setStars((currentStars) => {
      if (!currentStars) return
      const nextStars = []
      for (let i = 0; i < currentStars.length; i++) {
        const star = currentStars[i]
        const isOffscreen = star.x > window.innerWidth ||
          star.y > window.innerHeight + window.scrollY * 0.1 ||
          star.y < window.scrollY * 0.1

        if (isOffscreen) {
          nextStars.push(star)
          continue
        }
        if (twinkling.current[i] !== undefined) {
          twinkling.current[i]--
          if (twinkling.current[i] === 0) {
            twinkling.current[i] = undefined
            star.opacity = 1
          }
        } else {
          if (Math.random() >= TWINKLE_RATE) {
            nextStars.push(star)
            continue
          }
          twinkling.current[i] = getRandomInt(20, 40)
          star.opacity = 0
        }
        nextStars.push(star)
      }
      return nextStars
    })
  }, [])

  useEffect(() => {
    const timeout = setTimeout(draw, 17)
    return () => clearTimeout(timeout)
  }, [stars, draw])

  return (
    <>
      <div style={styles.wrapper}>
        {stars && stars.map((star, i) => {
          const isOffscreen = star.x > window.innerWidth ||
            star.y > window.innerHeight + window.scrollY * 0.1 ||
            star.y < window.scrollY * 0.1
          return isOffscreen ? null : (
            <div key={i} id={`star-${i}`} style={
              {
                ...styles.star,
                ...{
                  opacity: star.opacity,
                  top: `${star.y + (-window.scrollY * 0.1)}px`,
                  left: `${star.x}px`,
                  backgroundXolor: `white`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                }
              }
            } />
          )
        })}
        {children}
      </div>
    </>
  );
}

export default StarryNight
