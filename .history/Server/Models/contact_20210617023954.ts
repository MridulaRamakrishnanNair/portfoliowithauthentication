import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
const ContactSchema = new Schema
    ({
        firstname: String,
        lastname: String,
        Email: String,
        ContactNumber: Number,
        Address: String
    },
        {
            collection: "contact"
    
        });
const Model = mongoose.model("Contact", ContactSchema);
export default Model;