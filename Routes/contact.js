const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').post((req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const subject = req.body.subject;
	const message = req.body.message;
	const contact = new Contact( {name, email, subject, message});

	contact.save()
	.then(() => res.json(contact))
	.catch(err => res.status(400).json('Error: ' + err))
});
router.route('/').get((req, res) => {
	Contact.find()
	.then(contacts => res.json(contacts))
	.catch(err => res.status(400).json('Error : ' + err))
})


module.exports = router;