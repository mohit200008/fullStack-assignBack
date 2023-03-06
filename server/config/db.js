const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config

const connectDB = async () => {
    return mongoose.connect('mongodb+srv://admin:admin@contacts.md4jhwv.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
           .then(() => console.log('database connected'))
           .catch((err) => console.log(err))
}

module.exports = connectDB