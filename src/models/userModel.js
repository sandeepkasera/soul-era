import mongoose, { Mongoose, mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username already exists!"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email already exists!"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    cart: {
        type: Array,
        default: [],
    },
    orderHistory: {
        type: Array,
        default: [],
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry:Date,
})
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;

