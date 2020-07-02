import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class Response extends React.Component {
	
	changeLocation() {
	return	window.location='/'
	}
	render() {
		return (
			<Modal.Dialog>
  <Modal.Header closeButton onClick={this.changeLocation.bind(this)}>
    <Modal.Title>OSA Bank</Modal.Title>
  </Modal.Header>

  <Modal.Body>
		<p>Dear <strong>{this.props.name.toUpperCase()}</strong>, Thank You For Interest. Your Request About <strong>{this.props.subject.toUpperCase()}</strong> is Taken Into Consideration.
		We need some time to review your request. We will send You an Email on <strong>{this.props.email}</strong></p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" onClick={this.changeLocation.bind(this)}>Close</Button>
  </Modal.Footer>
</Modal.Dialog>
		)
		}
	}
	
	export default Response;