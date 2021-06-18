import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
const UserSchema = new Schema
    ({
        
        
    },
        {
            collection: "contact"
    
        });
const Model = mongoose.model("Contact", UserSchema);
export default Model;