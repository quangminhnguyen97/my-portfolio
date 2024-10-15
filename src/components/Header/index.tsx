import { motion } from "framer-motion"

function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="header-container"
    >
        Header
    </motion.div>
  )
}

export default Header