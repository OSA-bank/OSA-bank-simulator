//put your schema here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	//TODO
}, {
	timestamps: true 
});

const User = mongoose.model('User', userSchema);

module.exports = User;