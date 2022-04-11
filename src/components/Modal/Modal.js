
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import ModalInner from './ModalInner';
function Modal ({children, state, onClose}) {

        return ReactDOM.createPortal(
            <AnimatePresence> 
                {state && (<ModalInner state={state} onClose={onClose}>{children}</ModalInner>)}
            </AnimatePresence>,
     
    document.getElementById('modal-root'),
    )
    
}
export default Modal