import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
const UserSchema = new Schema
    ({
        username: String,
        emailAddress: String,
        D
        
    },
        {
            collection: "contact"
    
        });
const Model = mongoose.model("Contact", UserSchema);
export default Model;