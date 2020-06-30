import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';

function Contact () {
	return (
		<div className="container-fluid">
		<div className="row">
		  <div className="col-lg-6 col-md-6 col-sm-6">
			<div className="form-wrapper">
			  <form>
				
				<div className="form-group">
				  <label className="sr-only" for="name">Name</label>
				  <div className="input-group">
					<div className="input-group-addon">
					  <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
					</div>
					<input type="text" className="form-control" id="name" placeholder="Name"/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="sr-only" for="email">Email</label>
				  <div className="input-group">
					<div className="input-group-addon">
					  <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
					</div>
					<input type="text" className="form-control" id="email" placeholder="Email"/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="sr-only" for="subject">Subject</label>
				  <div className="input-group">
					<div className="input-group-addon">
					  <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
					</div>
					<input type="text" className="form-control" id="subject" placeholder="Subject"/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="sr-only" for="message">Message</label>
				  <textarea className="form-control" id="message" rows="6" placeholder="Message"></textarea>
				</div>
	  
				
				<div className="btn-group pull-right" role="group">
				  <button type="reset" className="btn btn-default">
					<span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Reset
				  </button>
				  <button type="submit" className="btn btn-primary submit">
					<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> Submit
				  </button>
				</div>
			  </form>
			</div>
		  </div>
		</div>
	  </div>
	);
}

export default Contact;