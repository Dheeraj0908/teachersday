import { useSpring, animated } from 'react-spring'
import React from 'react'



function MainPage() {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 1, color: '#292f33' },
        { opacity: 1, color: '#292f33' },
      ],
      from: { opacity: 1, color: '#292f33 ' },
    })
    // ...
    return <animated.div style={styles}>Please Swipe The Cards </animated.div>
  }

  export default MainPage;