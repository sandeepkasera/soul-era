import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";




connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        console.log('reqBody', reqBody);
        // check user exists
        console.log('user', User);
        
        const user = await User.findOne({username: username}).maxTimeMS(30000);
        console.log('user detail fetched..', user);
        

        if(user) {
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        console.log("user secret pw", password);
        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser);
        
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        

        

    } catch (error: any) {
        console.log('errr', error);
        
        return NextResponse.json({error: error.message}, {status: 500})
    }
}