"use server" // คำสั่งนี้ ทำให้ ทุก function นี้ only run on server side

import { revalidatePath } from "next/cache"
import { Post } from "./models"
import ConnectToDb from "./utils"

export const addPost = async (formData) => {

    // const title = formData.get("title")
    // const desc = formData.get("desc")
    // const slug = formData.get("slug")

    const {title, desc, slug, userId} = Object.fromEntries(formData)

    try {
    ConnectToDb()
    const newPost = new Post ({
            title,
            desc,
            slug,
            userId
        })       
        
        await newPost.save()
        console.log('Save to DB') 
        revalidatePath("/blog") // revalidate = กำหนดให้มีการตรวจสอบและอัปเดตข้อมูลใหม่ อีกครั้งเมื่อมีการเปลี่ยนแปลงข้อมูลใน backend หรือฐานข้อมูล
    } catch (error) {
        console.log(error)
    return {error:"Something went wrong!"}   }

}


export const deletePost = async (formData) => {

    const {id} = Object.fromEntries(formData)

    try {
    ConnectToDb()
        await Post.findByIdAndDelete(id)
        console.log('Deleted from DB') 
        revalidatePath("/blog") // revalidate = กำหนดให้มีการตรวจสอบและอัปเดตข้อมูลใหม่ อีกครั้งเมื่อมีการเปลี่ยนแปลงข้อมูลใน backend หรือฐานข้อมูล
    } catch (error) {
        console.log(error)
    return {error:"Something went wrong!"}   }

}