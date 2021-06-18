import mongoose from 'mongoose';
//alias for mongoose schema
const Schema = mongoose.Schema;
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