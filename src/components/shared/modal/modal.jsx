import { IconX } from "@tabler/icons-react";
import ReactModal from "react-modal";
import './modal.scss'

export const Modal = ({isOpen, onAfterClose = () => {}, setOpen, name, title, children}) => {
  return (
		<ReactModal
			isOpen={isOpen === name}
			onAfterOpen={() => setOpen(name)}
			onAfterClose={onAfterClose}
			closeTimeoutMS={500}
			onRequestClose={() => setOpen('')}
			parentSelector={() => document.querySelector('#root')}
		>
			{title ? <div className="ReactModal__Header">
				<p>{title}</p>
				<button onClick={() => setOpen('')}>
					<IconX size={24}/>
				</button>
			</div> : <button onClick={() => setOpen('')} className="ReactModal__Absolute-X">
					<IconX size={24}/>
				</button>}
			{children}
		</ReactModal>
  );
};
