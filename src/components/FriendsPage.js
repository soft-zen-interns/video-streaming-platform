import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../styles/FriendsPage.css';
import Modal from 'react-modal';

const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		//marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)'

	}
};


Modal.setAppElement('#root');

class FriendsPage extends React.Component {
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
					//contentLabel="Example Modal"
				>
					<Tabs className="tabs">
						<TabList>
							<Tab> <span className="dot">1</span> <p> PROFILE INFO</p></Tab>
							<Tab> <span className="dot">2</span> <p>FRIENDS</p></Tab>
							<Tab> <span className="dot">3</span> <p>ADD VIDEO</p></Tab>
						</TabList>

						<TabPanel>
							<h2>Any content 1</h2>
						</TabPanel>

						<TabPanel>
							<h2>
								<div className="intro">
									<span>Username, now let's get you connected with friends.</span>
								</div>
								<div className="subIntro">
									<span>Find your friends.</span>
								</div>
								<div>
									<button>google contacts</button>
								</div>
								<div>
									<button>facebook contacts</button>
								</div>
								<div>
									<button className="skip">skip this step</button>
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

export default FriendsPage;
