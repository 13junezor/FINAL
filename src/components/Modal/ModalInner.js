import styles from './modal.module.css'
import { useEffect } from 'react';
import { motion } from 'framer-motion'
import {modalWrap, modalInnerVariants} from './animations'
function ModalInner({children, onClose}) {
    const escapehandler = (e) => {
        if (e.code === "Escape") {
            onClose()
        }
            }
useEffect(()=> {
        window.document.addEventListener('keydown', escapehandler) 
return () => {
    window.document.removeEventListener('keydown', escapehandler)
}}, )

const closeModal = () => {
    onClose()
}

const innerClickhandler = (e) => {
    e.stopPropagation()
}

    return (
        <motion.div variants={modalWrap} initial="start" animate="show" exit="end" onClick={closeModal} className={styles.wrapper}>
        <motion.div variants={modalInnerVariants} onClick={innerClickhandler} className={styles.inner}>
        <svg onClick={closeModal} role="button" className={`bi bi-x-lg ${styles.icon}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg>
           {children} 
        </motion.div>
        
    </motion.div>
    )
}
export default ModalInner