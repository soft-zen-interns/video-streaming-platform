import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../styles/FriendsPage/Invite5.css';
import Modal from 'react-modal';
import FBLogo from '../../imgs/Facebook.png';
import GoogleLogo from '../../imgs/GoogleGreypng.png';

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

								<div id="infoText">
									<input id="inputBox" type="text" placeholder="You successfully sent 2 email invites!"/>
								</div>
								<div id="intro">
									<span className="text">WE HAVE GOOGLE, LETS'SCONNECT FACEBOOK</span>
								</div>
								<div id="subIntro">
									<span className="text">Find your Facebook friends that are already in VMP.</span>
								</div>

								<div className="buttons">
									<div className="buttonSection">
										<button id="googleBtn"><img src={GoogleLogo} alt="google.png" className = "image" id="googleImg"></img><span className="btnText">CONNECTED</span></button>
									</div>
									<div className="buttonSection">
										<button><img src={FBLogo} alt="facebook.png" className = "image"></img><span className="btnText">FACEBOOK FRIENDS</span></button>
									</div>
								</div>

								<div id="contactsSection">
									<div>
										<p className="text">Search your contacts for friends already on VMP</p>
									</div>
									<div id="searchBox">
										<input id="inputBox" type="text" placeholder="Search using a person's full name or @username"/>
									</div>
								</div>
								<div id="skipSection">
									<hr></hr>
									<button id="skip"> <span className="text">Skip this step</span></button>
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
