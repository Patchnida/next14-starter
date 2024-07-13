import { Post } from "@/lib/models";
import ConnectToDb from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const {slug} = params

    try {
        ConnectToDb()
        const post = await Post.findOne({slug})
        return NextResponse.json(post)
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post!")
    }
}

export const Delete = async (request, {params}) => {
    const {slug} = params

    try {
        ConnectToDb()

        await Post.deleteOne({slug})
        return NextResponse.json("Post deleted")
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete post!")
    }
}