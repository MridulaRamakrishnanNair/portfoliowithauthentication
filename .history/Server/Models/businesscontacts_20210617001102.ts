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
            
    
})