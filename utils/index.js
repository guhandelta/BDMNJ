import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref);

    useEffect(() => {
        if(isInView){
            // when the element is in view, the motion value can be set to the passed in value
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", latest => {
            /* ref.current => means the component is mounted and gets the current value
            latest.toFixed(0) => to prevnet displaying ractional values*/
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}>{springValue.current}</span>
}

