import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
const ContactSchema = new Schema
    ({
        FullName: String,
        Emailid: String,
        Contac: String,
        Colour: String,
        Size: String,
        Price: Number
    },
        {
            collection: "contacts"
    
        });
const Model = mongoose.model("contacts", ContactSchema);
export default Model;