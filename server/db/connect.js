// import mongoose from 'mongoose'
import mongoose from 'mongoose'

const connection = async () => {
    try {
    const connect = mongoose.connect("mongodb://localhost:27017/authapp")
        console.log('database connected successfuly');
    } catch (error) {
        console.log('database not connected ',error);
    }
}

export default connection