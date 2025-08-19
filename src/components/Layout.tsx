import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Navigation from './Navigation'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.5
  }

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -20
    }
  }

  return (
    <div className={isHomePage ? "h-screen bg-background overflow-hidden" : "min-h-screen bg-background"}>
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className={isHomePage ? "h-full" : "pt-16"}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default Layout