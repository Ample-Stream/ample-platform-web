// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, id, name } = req.body;

      // Validate email
      if (!email || typeof email !== "string") {
        res.status(400).json({ error: "Invalid email" });
        return;
      }

      const app = await getApp();
      const db = await getDB();
      addEmail(db, email);
      res.status(200).json({ message: "Email added successfully" });
    } catch (error) {
      console.error("Error adding email:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
