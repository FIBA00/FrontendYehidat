import { motion } from 'motion/react'

/**
 * Wraps children in a scroll-triggered fade/rise animation.
 * Replaces the old manual IntersectionObserver approach — Motion
 * handles viewport detection, reduced-motion, and cleanup for us.
 *
 * Usage: <Reveal delay={0.1}><div>...</div></Reveal>
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div', ...props }) {
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
