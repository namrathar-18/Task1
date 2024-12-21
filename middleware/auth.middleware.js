import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
    if(!req.auth.userId){
        return res.status(401).json({message: "Unauthorized - You need to login"});
        
    }
    next();
}

export const reuireAdmin = async (req, res, next) => {
    try {
       const currentUser = await clerkClient.users.getUser(req.auth.userId);
       const isAdmin = process.env.ADMIN_EMAIL == currentUser.primaryEmailAddress?.emailAddress; 
       if(!isAdmin){
        return res.status(401).json({message: "Unauthorized - You need to be an admin"});
           
       }
       next();
    } catch (error) {
        
    }
}