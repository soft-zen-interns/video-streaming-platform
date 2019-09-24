import React from 'react';
import Modal from 'react-modal';
import '../styles/EmailAndProfilePage.css';

Modal.setAppElement("#root");

class EmailAndProfilePage extends React.Component {
	constructor() {
		super();

		this.state = {modalIsOpened: false};
		
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({modalIsOpened: true});
	}

	render() {
		return (
			<div>
				<button 
					onClick = {this.openModal}
					className = "sign-up"
				>Sign Up</button>
				<Modal
					isOpen = {this.state.modalIsOpened}
					contentLabel = "Confirmation Email and Profile Modal"
					overlayClassName = "overlay"
					className = "modal"
				>
				<h1>Hello you opened me!</h1>
				<button>tab</button>
				<button>is</button>
				<button>here</button>
				</Modal>
			</div>
		);
	}
}

export default EmailAndProfilePage;