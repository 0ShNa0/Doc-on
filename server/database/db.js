import mongoose from 'mongoose';

const Connection = async (username='usercode',password='password1234') =>{

    const URL=`mongodb://${username}:${password}@ac-eu2h55x-shard-00-00.fsfwlcx.mongodb.net:27017,ac-eu2h55x-shard-00-01.fsfwlcx.mongodb.net:27017,ac-eu2h55x-shard-00-02.fsfwlcx.mongodb.net:27017/?ssl=true&replicaSet=atlas-afbner-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await  mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log('Yipee!!!! Database connected');
    }
    catch(error){
        console.log('Error mongodb',error);
    }
}
export default Connection;