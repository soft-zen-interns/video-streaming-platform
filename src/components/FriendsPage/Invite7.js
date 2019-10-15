import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../styles/FriendsPage/Invite8.css';
import Modal from 'react-modal';
import FBLogo from '../../imgs/FacebookGreypng.png';
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

								<div id="intro">
									<span className="text">WE HAVE GOOGLE, LETS'SCONNECT FACEBOOK</span>
								</div>
								<div id="subIntro">
									<span className="text">Find your Facebook friends that are already in VMP.</span>
								</div>



								<div id="completeSection">
									<button id="complete"> <span className="completeText">COMPLETE PROFILE</span></button>
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
