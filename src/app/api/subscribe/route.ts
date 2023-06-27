// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
    addDoc,
    collection,
    Firestore,
    getDocs,
    getFirestore,
  } from "firebase/firestore";
  import { NextRequest, NextResponse } from "next/server";
  import { getApp } from "@/utils/firebase";
  import { getDB } from "@/utils/firebase";
  
  const addEmail = async (db: Firestore, email: string) => {
    try {
      const docRef = await addDoc(collection(db, "platform-subscribers"), {
        email: email,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  

  export async function POST(request: Request)  {
    
      try {
        const { email, id, name } = await request.json();
  
        // Validate email
        if (!email || typeof email !== "string") {
          return NextResponse.json({ error: "Invalid email" });
        }
  
        const app = await getApp();
        const db = await getDB();
        addEmail(db, email);
        return NextResponse.json({ message: "Email added successfully" });
      } catch (error) {
        console.error("Error adding email:", error);
        return NextResponse.json({ error: "Internal server error" });
      }

  }
  