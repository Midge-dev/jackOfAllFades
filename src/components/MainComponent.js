import React, { useRef, useState } from 'react';
import ModalContent from './ModalContent';
import JumbotronComponent from './JumbotronComponent';
import NavbarComponent from './NavbarComponent';
import ReactModal from 'react-modal';
import HomeComponent from './HomeComponent';

export default function MainComponent() {
	const toggleModal = () => {
		handleModal(!isModalOpen);
	};

	const [ isModalOpen, handleModal ] = useState(false);

	return (
		<div className="">
			<ReactModal isOpen={isModalOpen} preventScroll={true} shouldCloseOnOverlayClick={true} onRequestClose={toggleModal}>
				<ModalContent onClick={toggleModal}/>
			</ReactModal>
			<NavbarComponent onClick={toggleModal}/>
			<JumbotronComponent />
			<HomeComponent />
		</div>
	);
}
