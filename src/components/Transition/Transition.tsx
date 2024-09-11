import { motion } from "framer-motion"

const Transition = (OgComponent: React.ComponentType<any>) => {
  return (props: any) => (
    <>
    <OgComponent {...props}/>
      <motion.div
        className="slide-in"
        initial={{scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
       transition={{
          duration: 1,  // Aumente a duração para suavizar a animação
          ease: [0.42, 0, 0.58, 1],  // Curva de animação suavizada (easeInOut)
        }}
      />
      <motion.div
        className="slide-out"
        initial={{scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{scaleY: 0}}
       transition={{
          duration: 1,  // Aumente a duração para suavizar a animação
          ease: [0.42, 0, 0.58, 1],  // Curva de animação suavizada (easeInOut)
        }}
      />
    </>
  )
}

export default Transition