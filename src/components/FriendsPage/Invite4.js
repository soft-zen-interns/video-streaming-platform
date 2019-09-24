import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../styles/FriendsPage/Invite4.css';
import Modal from 'react-modal';
import FBLogo from '../../imgs/Facebook.png';
import GoogleLogo from '../../imgs/Google.png';

const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		transform             : 'translate(-50%, -50%)'

	}
};


Modal.setAppElement('#root');

class Invite1 extends React.Component {
	constructor() {
		super();

		this.state = {
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		//this.subtitle.style.color = '#f00';
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	render() {
		return (
			<div>
				<button onClick={this.openModal}>SIGN UP</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
				>
					<Tabs>
						<TabList>
							<Tab> <span className="dot">1</span> <p className="tabNames"> PROFILE INFO</p></Tab>
							<Tab> <span className="dot">2</span> <p className="tabNames">FRIENDS</p></Tab>
							<Tab> <span className="dot">3</span> <p className="tabNames">ADD VIDEO</p></Tab>
						</TabList>

						<TabPanel>
							<h2>Any content 1</h2>
						</TabPanel>

						<TabPanel>
							<h2 id="content">
								<div id="intro">
									<span className="text">INVITE YOUR EMAIL CONTACTS</span>
								</div>
								<div>
									<input id="inputBox" type="text" placeholder="Search 35 contacts"></input>
								</div>

								<div id="contactsSection">
									<div id="sp1">
										<p>TO DO...</p>
										<p>TO DO...</p>
										<p>TO DO...</p>
										<p>TO DO...</p>
										<p>TO DO...</p>
										<p>TO DO...</p>
										<p>TO DO...</p>
										<p>TO DO...</p>
										<p>TO DO...</p>
										<p>TO DO...</p>
										<p>TO DO...</p>
										<p>TO DO...</p>
									</div>
									<div id="sp2" className="text">
										<p><b>From:</b> youremail@gmail.com</p>
										<p><b>Subject:</b> You are invited to VMP by Username!</p>
										<div id="mailPreview">
											<p>Hi Account Name</p>
											<textarea rows="4" className="text">
											Join me in sharing and discovering music videos on Video Music Platform!
											</textarea>
											<p>www.vmp.com/blablabla</p>
											<p>- Profile Name</p>
										</div>
										<div id="btn">
											<button><span className="btnText">SEND 2 INVITES</span></button>
										</div>

									</div>
								</div>
							</h2>
						</TabPanel>

						<TabPanel>
							<h2>Any content 2</h2>
						</TabPanel>
					</Tabs>
				</Modal>
			</div>
		);
	}
}

export default Invite1;
