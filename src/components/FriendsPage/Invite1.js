import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../styles/FriendsPage/Invite1.css';
import Modal from 'react-modal';
import FBLogo from '../../imgs/Facebook.png';
import GoogleLogo from '../../imgs/Google.png';
import Invite4 from '../FriendsPage/Invite4';

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

		function NextPage() {
			return (
				<Invite4/>
			);
		}

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
							<Tab> <span className="dot">1</span> <p> PROFILE INFO</p></Tab>
							<Tab> <span className="dot">2</span> <p>FRIENDS</p></Tab>
							<Tab> <span className="dot">3</span> <p>ADD VIDEO</p></Tab>
						</TabList>

						<TabPanel>
							<h2>Any content 1</h2>
						</TabPanel>

						<TabPanel>
							<h2 id="content">
								<div id="intro">
									<span className="text">USERNAME, NOW LET'S GET YOU CONNECTED WITH FRIENDS.</span>
								</div>
								<div id="subIntro">
									<span className="text">Find your friends.</span>
								</div>

								<div>
									<button onClick={NextPage}><img src={GoogleLogo} alt="google.png" className = "image"></img><span className="btnText">GOOGLE CONTACTS</span></button>
								</div>
								<div>
									<button><img src={FBLogo} alt="facebook.png" className = "image"></img><span className="btnText">FACEBOOK FRIENDS</span></button>
								</div>
								<div>
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