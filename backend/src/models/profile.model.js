import { model, Schema } from "mongoose";

const profileSchema = new Schema({
        name: String,
        email: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Profile = model('Profile', profileSchema);

export default Profile;