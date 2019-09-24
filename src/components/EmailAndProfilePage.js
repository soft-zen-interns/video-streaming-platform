import React from 'react';
import Modal from 'react-modal';
import ReactCodeInput from 'react-verification-code-input';
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
					className = "button-layout sign-up-btn"
				>Sign Up</button>
				<Modal
					isOpen = {this.state.modalIsOpened}
					contentLabel = "Confirmation Email and Profile Modal"
					overlayClassName = "overlay"
					className = "main-styles modal"
				>
				<h4 className="heading-text">
					CONFIRM EMAIL ADDRESS <br/> TO COMPLETE YOUR PROFILE
				</h4>
				<ReactCodeInput 
					type = "text"
					fields = {6}
					fieldWidth = {20}
					fieldHeight = {20}
					className = "code-confirm"
				/>
				<button
					//onClick = {}
					className = "button-layout confirm-btn" 
				>CONFIRM</button>
				<p className="bottom-text">
					In case you didn't recieve your email, we can try to 
					<b> Resend It To You</b>
				</p>
				</Modal>
			</div>
		);
	}
}

export default EmailAndProfilePage;