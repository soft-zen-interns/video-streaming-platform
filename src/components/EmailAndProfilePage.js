import React from 'react';
import Modal from 'react-modal';
import ReactCodeInput from 'react-verification-code-input';
import '../styles/EmailAndProfilePage.css';
import '../styles/overriten-styles-for-input-verif-code.css';
import verifyIcon from '../images/verify-symbol.png';

import Button from 'react-bootstrap/Button';

Modal.setAppElement("#root");

class EmailAndProfilePage extends React.Component {
	constructor() {
		super();

		this.state = {
			confirmCodeModalIsOpened: false,
			verifiedModalIsOpened: false,
			disabledButton: true
		};
		
		this.openConfirmCodeModal = this.openConfirmCodeModal.bind(this);
		this.closeConfirmCodeModal = this.closeConfirmCodeModal.bind(this);
		this.openVerifiedModal = this.openVerifiedModal.bind(this);
		this.closeVerifiedModal = this.closeVerifiedModal.bind(this);
		this.enableConfirmButton = this.enableConfirmButton.bind(this);
	}

	openConfirmCodeModal() {
		this.setState({confirmCodeModalIsOpened: true});
	}

	openVerifiedModal() {
		this.setState({verifiedModalIsOpened: true});
	}

	closeConfirmCodeModal() {
		this.setState({confirmCodeModalIsOpened: false});
		this.openVerifiedModal();
	}

	closeVerifiedModal() {
		this.setState({verifiedModalIsOpened: false});
	}

	enableConfirmButton() {
		this.setState({disabledButton: false});
	}

	render() {
		return (
			<div>
				<button 
					onClick = {this.openConfirmCodeModal}
					className = "button-layout sign-up-btn"
				>Sign Up</button>
				<Modal
					isOpen = {this.state.confirmCodeModalIsOpened}
					contentLabel = "Confirmation Email and Profile Modal"
					overlayClassName = "overlay"
					className = "main-styles modal"
				>
				<div className="modal-part-box">
					<h4 style={{ paddingTop: "30px"}} className="heading-text">
						CONFIRM EMAIL ADDRESS <br/> TO COMPLETE YOUR PROFILE
					</h4>
					<ReactCodeInput 
						fields = {6}
						filedsWidth = {10}
						autoFocus = {true}
						className = "verif-code"
						//onConplete = {this.enableConfirmButton}
					/>
				</div>
				<div className="modal-part-box">
					<button
						id="lock"
						onClick = {this.closeConfirmCodeModal}
						className = "button-layout confirm-btn"
						//disabled = {this.state.disabledButton}
					>CONFIRM</button>
					<p className="bottom-text">
						In case you didn't recieve your email, we can try to 
						<a href="#"><b> Resend It To You</b></a>
					</p>
				</div>
				</Modal>
				<Modal
				isOpen = {this.state.verifiedModalIsOpened}
				contentLabel = "Your account is confirmed"
				overlayClassName = "overlay"
				className = "main-styles modal"
				>
				<div className="modal-part-box">
					<img src={verifyIcon} alt="Verify Icon"/>
					<h4 style={{ paddingTop: "10px"}} className="heading-text">
						YOUR ACCOUNT IS CONFIRMED!
					</h4>
				</div>
				<div className="modal-part-box">
					<button
						onClick = {this.closeVerifiedModal}
						className = "button-layout confirm-btn" 
					>CONTINUE</button>
					<p className="bottom-text">
						Use full-name@gmail.com for Log In 
					</p>
				</div>
				</Modal>
			</div>
		);
	}
}

export default EmailAndProfilePage;