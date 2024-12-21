import { Router } from "express";
import { createSong } from "../controllers/admin.controller.js";
import { protectRoute } from "../../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, createSong);


export default router;