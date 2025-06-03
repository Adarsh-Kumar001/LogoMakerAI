import { NextResponse } from "next/server";
import {doc, setDoc, getDoc} from 'firebase/firestore'
import { db } from "@/firebaseConnect";

export async function POST(req) {
    const {userName, userEmail} = await req.json()
    try{
     //if user exist in db
     const docRef = doc(db,"users",userEmail);
     const docSnap = await getDoc(docRef);
     if(docSnap.exists()){
        return NextResponse.json(docSnap.data())
     }
     else{
        //insert new user
        const data={
            name:userName,
            email:userEmail,
            credits:5
        }
        await setDoc(doc(db,"Users",userEmail),{
           ...data
        })
        return NextResponse.json(data)
     }
    }
    catch(e){
      console.error("Error in POST /api/user:", e);
        return NextResponse.json(
            { error: "Internal server error", message: e.message },
            { status: 500 }
        );
    }
}