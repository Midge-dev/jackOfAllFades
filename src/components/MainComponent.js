import React, { useRef, useState } from 'react';
import ModalContent from './ModalContent';
import JumbotronComponent from './JumbotronComponent';
import NavbarComponent from './NavbarComponent';
import ReactModal from 'react-modal';

export default function MainComponent() {
	const toggleModal = () => {
		handleModal(!isModalOpen);
	};

	const [ isModalOpen, handleModal ] = useState(false);

	return (
		<div className="main-hero h-screen flex mx-auto items-center">
			<ReactModal isOpen={isModalOpen} preventScroll={true} shouldCloseOnOverlayClick={true} onRequestClose={toggleModal}>
				<ModalContent onClick={toggleModal}/>
			</ReactModal>
			<JumbotronComponent onClick={toggleModal} />
		</div>
	);
}
