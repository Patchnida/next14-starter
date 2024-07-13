import { Post, User } from "./models";
import ConnectToDb from "./utils";
import { unstable_noStore as noStore }  from "next/cache";

export const getPosts = async () => {
  try {
    await ConnectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    // throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    await ConnectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    // throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore ()
  try {
    await ConnectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    // throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    await ConnectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    // throw new Error("Failed to fetch users!");
  }
};
