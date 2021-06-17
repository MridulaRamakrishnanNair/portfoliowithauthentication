import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
const BusinesscontactsSchema = new Schema
    ({
        Name: String,
        Brand: String,
        Category: String,
        Colour: String,
        Size: String,
        Price: Number
    },
        {
            collection: "businesscontacts"
    
        });
const Model = mongoose.model("Businesscontacts", BusinesscontactsSchema);
export default Model;