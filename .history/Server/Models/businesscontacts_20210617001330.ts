import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
const BusinesscontactsSchema = new Schema
    ({
        name: String,
        brand: String,
        category: String,
        colour: String,
        size: String,
        price: Number
    },
        {
            collection: "businesscontacts"
    
        });
const Model = mongoose.model("Businesscontacts", BusinesscontactsSchema);
export default Model;