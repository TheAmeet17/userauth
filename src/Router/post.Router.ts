import { Router } from "express";
import { postCreate } from "../controller/post.controller";

const postRouter = Router()


postRouter.post('/create-post',postCreate)


export default postRouter;