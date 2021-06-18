import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//alias for mongoose schema
const UserSchema = new Schema
    ({
        username: String,
        emailAddress: String,
        displayName: String,
        created: {
      type: Date,
      default: Date.now()
        },
        updated: {
      type: Date,
      default: Date.now()
    },      
    },
        {
            collection: "users"
    
        });
const Model = mongoose.model("Contact", UserSchema);
export default Model;