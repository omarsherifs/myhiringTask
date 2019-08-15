import React, { Component } from 'react';
import Modal from './modal';

const modalStyle = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0,0.5)"
	}
};

const mainStyle = {
	app: {
		margin: "120px 0"
	},
	button: {
		backgroundColor: "#408cec",
		border: 0,
		padding: "12px 20px",
		color: "#fff",
		margin: "0 auto",
		width: 150,
		display: "block",
		borderRadius: 3
	}
};


export class User extends Component {

	constructor(props) {
		super(props);

		// set initial state
		this.state = {
			isModalOpen: false,
			isInnerModalOpen: false
		};


  }

  		// bind functions
      closeModal = this.closeModal.bind(this);
      openModal = this.openModal.bind(this);
  
  closeModal() {
		this.setState({
			isModalOpen: false
		});
	}

	// open modal (set isModalOpen, false)
	openModal() {
		this.setState({
			isModalOpen: true
		});
	}
  
  render() {
    return (
      <tr>
        <td>{this.props.users.id}</td>
        <td>{this.props.users.name}</td>
        <td>{this.props.users.phone}</td>
        <td>
          <button onClick={this.openModal}> Details</button>
        </td>
        <td>         
           <button> Locate on map</button>
           <Modal
           users={this.users}
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
					style={modalStyle}
				>

		<ul class="rounded-list">
			<h1>{this.props.users.name}</h1>		
			<li><a href="">Id: {this.props.users.id}</a></li>
			<li><a href="">Phone Number: {this.props.users.phone}</a></li>
			<li><a href="">Address: {this.props.users.address.city}, {this.props.users.address.street}</a></li>
			<li><a href="">Company: {this.props.users.company.name}</a></li>
			<li><a href="">Username: {this.props.users.username}</a></li>
			<li><a href="">Website: {this.props.users.website}</a></li>
       </ul>
					<button
						style={{
							...mainStyle.button,
							margin: 0,
							width: "auto",
							marginTop: 10
						}}
						onClick={this.closeModal}
					>
						Close
					</button>
				</Modal>
        </td>
      </tr>
      
    )
  }
}

export default User;
