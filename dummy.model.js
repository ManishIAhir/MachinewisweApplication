import { Schema, model } from "mongoose";


const dataSchema  = new Schema({
    ts:{
        type : Date,
        required : true
    },
    machine_status : {
        type : Number,
        required : true
    },
    vibration : {
        type : Number,
        required : true
    }
});



const Name = model('name', dataSchema);

export default Name;