import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
const ContactSchema = new Schema
    ({
        firstname: String,
        lastname: String,
        email: String,
        contactnumber: Number,
        address: String
    },
        {
            collection: "contact"
    
        });
const Model = mongoose.model("contact", ContactSchema);
export default Model;