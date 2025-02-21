"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

export default function MagicalProposal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const noButtonControls = useAnimation()

  const handleNoButtonHover = () => {
    noButtonControls.start({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      transition: { duration: 0.3 },
    })
  }

  const handleYesClick = () => {
    setShowConfetti(true)
  }

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showConfetti])

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      <StarryBackground />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`bg-white rounded-lg p-8 shadow-2xl transform transition-all duration-500 ${
            isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotateY: 0, transition: { duration: 0.5 } },
            closed: { rotateY: -90, transition: { duration: 0.5 } },
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 font-handwriting text-pink-600">
            Dear Vishva
          </h1>
          <p className="text-lg mb-4 font-handwriting text-gray-800">
          Every moment I spent with you today felt absolutely magical. Your smile lit up my day, and your laughter was the sweetest melody I could ever hear. Every second with you made today so special, and I can’t imagine a better way to spend my time.
          </p>
          <p className="text-lg mb-6 font-handwriting text-gray-800">So, I have a very important question for you...</p>
          <p className="text-2xl font-semibold text-center mb-6 font-handwriting text-pink-600">
            Will you be my girlfriend?
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              className="px-6 py-2 bg-pink-500 text-white rounded-full font-handwriting text-xl hover:bg-pink-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYesClick}
            >
              Yes! 💖
            </motion.button>
            <motion.button
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full font-handwriting text-xl"
              animate={noButtonControls}
              onHoverStart={handleNoButtonHover}
            >
              No 😢
            </motion.button>
          </div>
        </motion.div>
        {!isOpen && (
          <motion.div
            className="absolute cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24 text-pink-300"
            >
              <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
            </svg>
          </motion.div>
        )}
      </div>
      {showConfetti && <Confetti />}
    </div>
  )
}

function StarryBackground() {
  return (
    <div className="absolute inset-0">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  )
}

function Confetti() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-pink-500"
          style={{
            top: "-10%",
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0%", "100%"],
            x: [`0%`, `${(Math.random() - 0.5) * 20}%`],
            rotate: [0, 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

