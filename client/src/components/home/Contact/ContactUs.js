import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import axios from 'axios';
import Response from './Response';
import ReactDOM from 'react-dom';
//import Model from './Model'

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
			contacts: [],
			nameLastContact:'',
			subjectLastContact: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeSubject = this.handleChangeSubject.bind(this);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
	}

	handleChangeName(e) {
		this.setState({
			name: e.target.value,
		});
		console.log('name: ',this.state.name)
	}
	handleChangeEmail(e) {
		this.setState({
			email: e.target.value,
		});
		console.log('email: ',this.state.email)
	}
	handleChangeSubject(e) {
		this.setState({
			subject: e.target.value,
		});
		console.log('subject: ', this.state.subject)
	}
	handleChangeMessage(e) {
		this.setState({
			message: e.target.value,
		});
		console.log('message: ',this.state.message)
	}


	handleSubmit(e) {
		e.preventDefault();

		const contact = {
		 name: this.state.name,
		 email: this.state.email,
		 subject: this.state.subject,
		 message: this.state.message
		};


		axios.post('http://localhost:5000/contact', contact)
		.then(result => {
			// const name = result.data.name;
			//const subject 
			// this.setState({
			// 	contacts: contacts
			// })
			console.log("data: ",result.data)
		})
		.catch(err => {console.log(err)});

		// axios.get('http://localhost:5000/contact')
		// .then(result => {
		// 	const contacts = result.data;
		// 	this.setState({
		// 		contacts: contacts
		// 	})
		// 	console.log(Array.isArray(this.state.contacts))
		// })
		// .then(res => {
		// 	const lastContact =	this.state.contacts[this.state.contacts.length - 1];
		// 	this.setState({
		// 		nameLastContact: lastContact.name,
		// 		nameLastSubject : lastContact.subject
		// 	})
		// 	console.log(lastContact)
		// })

		
 
	}
	changeView() {
		ReactDOM.render(<Response name={this.state.name} subject={this.state.subject} email={this.state.email}/>, document.getElementById('root'));
	}

	render() {
		return (
		<div>
			<h2 style={{marginTop: "35px", marginRight: "560px"}}>Contact Us: </h2>
				<div className="container-fluid">
				
			<div className="row">
			  <div className="col-lg-6 col-md-6 col-sm-6">
				<div className="form-wrapper">
				  <form  onSubmit={this.handleSubmit}>
					
					<div className="form-group">
					  <label className="sr-only" forhtml="name">Name</label>
					  <div className="input-group">
						<div className="input-group-addon">
						  <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
						</div>
						<input type="text" className="form-control" name="name" placeholder="Name" onChange={this.handleChangeName}/>
					  </div>
					</div>
					<div className="form-group">
					  <label className="sr-only" forhtml="email">Email</label>
					  <div className="input-group">
						<div className="input-group-addon">
						  <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
						</div>
						<input type="text" className="form-control" id="email" placeholder="Email" onChange={this.handleChangeEmail}/>
					  </div>
					</div>
					<div className="form-group">
					  <label className="sr-only" forhtml="subject">Subject</label>
					  <div className="input-group">
						<div className="input-group-addon">
						  <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
						</div>
						<input type="text" className="form-control" id="subject" placeholder="Subject" onChange={this.handleChangeSubject}/>
					  </div>
					</div>
					<div className="form-group">
					  <label className="sr-only" forhtml="message">Message</label>
					  <textarea className="form-control" id="message" rows="6" placeholder="Message" onChange={this.handleChangeMessage}></textarea>
					</div>
		  
					
					<div className="btn-group pull-right" role="group">
					  <button type="reset" className="btn btn-default">
						<span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Reset
					  </button>
					  <button type="submit" className="btn btn-primary submit" onClick={this.changeView.bind(this)}>
						<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> Submit
					  </button>
					</div>
				  </form>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		);
	}
	
}

export default Contact;