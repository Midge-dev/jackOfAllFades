import React, { useRef, useState } from 'react';
import ModalContent from './components/ModalContent';
import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponent from './components/NavbarComponent';
import ReactModal from 'react-modal';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';
import { Routes, Route } from 'react-router-dom';

export default function MainComponent() {
	const toggleModal = () => {
		handleModal(!isModalOpen);
	};

	const [ isModalOpen, handleModal ] = useState(false);

	const modalStyle = {
		content: {
		  top: '50%',
		  left: '50%',
		  bottom: 'auto',
		  marginRight: '-50%',
		  transform: 'translate(-50%, -50%)',
		},
	  };


	return (
		<div className="">
			<ReactModal
				isOpen={isModalOpen}
				preventScroll={true}
				shouldCloseOnOverlayClick={true}
				onRequestClose={toggleModal}
        style={modalStyle}
			>
				<ModalContent onClick={toggleModal} />
			</ReactModal>
			<NavbarComponent onClick={toggleModal} />
			<JumbotronComponent />
			<Routes>
				<Route path="/" element={<HomeComponent />} />
				<Route path="/about" element={<div>ABOUT</div>} />
			</Routes>
			<FooterComponent />
		</div>
	);
}
