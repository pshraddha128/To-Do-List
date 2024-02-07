import mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
//Cxyk6Z31rhZ8KhKu
export const Connection = () => {

    const MONGODB_URL = 'mongodb://pshraddha128:Cxyk6Z31rhZ8KhKu@ac-vua5r4e-shard-00-00.apfm5xh.mongodb.net:27017,ac-vua5r4e-shard-00-01.apfm5xh.mongodb.net:27017,ac-vua5r4e-shard-00-02.apfm5xh.mongodb.net:27017/?ssl=true&replicaSet=atlas-8ad0u0-shard-0&authSource=admin&retryWrites=true&w=majority';
    mongoose.connect(MONGODB_URL, {useNewUrlParser: true});
    mongoose.connection.on('connected', () =>{
        console.log('Database successfully connected');
    })

    mongoose.connection.on('disconnected', () =>{
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () =>{
        console.log('Error occured while connecting');
    })

}
export default  Connection;