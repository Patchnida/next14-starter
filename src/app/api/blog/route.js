import { Post } from "@/lib/models";
import ConnectToDb from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        ConnectToDb()
        const posts = await Post.find()
        return NextResponse.json(posts)
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts!")
    }
}