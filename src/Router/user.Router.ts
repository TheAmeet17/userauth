import {Router }from "express"
import { createUser,getUser, updateUser,deleteUser} from "../controller/user.controller";


const userRouter=Router();
userRouter.post("/create",createUser);
userRouter.get("/get",getUser);
userRouter.put("/update/:id",updateUser);
userRouter.delete("/delete/:id",deleteUser);
//userRouter.post("/post",create-post);
export default userRouter;