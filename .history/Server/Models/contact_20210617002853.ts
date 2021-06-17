import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
const ContactSchema = new Schema
    ({
        Name: String,
        Brand: String,
        Category: String,
        Colour: String,
        Size: String,
        Price: Number
    },
        {
            collection: "contacts"
    
        });
const Model = mongoose.model("contacts", ContactSchema);
export default Model;