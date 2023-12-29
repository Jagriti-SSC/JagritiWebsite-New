import {AnimatePresence, motion} from "framer-motion"


//keyValye prop is used because motion component signin or signup ko alag alag samjhe kyuki vo ek component se bne hn unko differentiate krne ke liye keyValue prop is used, if diffrentiate n krke to animation sirf ek baar hoga.

const AnimationWrapper = ({children,initial = {opacity:0},animate= {opacity:1},transition = {duration:1},keyValue,className}) => {
    return (
        <motion.div
           key={keyValue}
           initial={initial}
           animate={animate}
           transition={transition}
           className={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimationWrapper;