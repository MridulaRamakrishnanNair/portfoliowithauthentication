import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
const ContactSchema = new Schema
    ({
        FirstName: String,
        LastN
        Email: String,
        ContactNumber: Number,
        Address: String
    },
        {
            collection: "contacts"
    
        });
const Model = mongoose.model("Contact", ContactSchema);
export default Model;