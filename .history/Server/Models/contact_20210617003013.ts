import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
const ContactSchema = new Schema
    ({
        FullName: String,
        Email: String,
        ContactNumber: Number,
        Address: String
    },
        {
            collection: "contacts"
    
        });
const Model = mongoose.model("contacts", ContactSchema);
export default Model;