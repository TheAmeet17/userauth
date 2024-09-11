// import prisma from "../database/prisma";


// //req body bata data tanyuou
// //title descripti0n likes
// //auth ---> user id
// //req .user bata user id fetch gara tana hai 


// await prisma.post.create({
//     title:,
//     description,
//     likes:,
//     userId:auth ko user id 
// })

 import express, { Request, Response } from 'express';
import prisma from '../database/prisma';

const app = express();
app.use(express.json());


// Create a new post with relation to a user
export const postCreate =  async (req: Request, res: Response) => {
    const { title, description, likes, userId } = req.body;

    try {
        // Check if the user exists
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create a new post
        const newPost = await prisma.post.create({
            data: {
                title: title,
                description: description,
                likes: likes || 0, // Default to 0 if not provided
                user: { connect: { id: userId } }, // Connect the post to the user
            },
        });

        return res.status(201).json({
            message: "Post created successfully",
            post: newPost,
        });
    } catch (error) {
        return res.status(500).json({ message: "Error creating post", error: error.message });
    }
}



/**
 *  
 * user post one to many || many to one 
 * 
 * user userSetting one to one
 * 
 * 
 * post tag many to many
 * 
 */