import express from "express";
import { sendMessage, getAllMessages, deleteMessage } from "../controller/messageController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/send', sendMessage);
router.get('/all', protect, restrictTo("admin"), getAllMessages);
router.delete('/delete/:id', protect, restrictTo("admin"), deleteMessage);

export default router;