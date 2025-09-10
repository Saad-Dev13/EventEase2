import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req , res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!" });
        }
        await Message.create({name, email, subject, message});
        res.status(201).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        if (error.name === "ValidationError") {
            let errorMessage = "";
            if (error.errors.name) {
                errorMessage += error.errors.name.message + ". ";
            }
            if (error.errors.email) {
                errorMessage += error.errors.email.message + ". ";
            }
            if (error.errors.subject) {
                errorMessage += error.errors.subject.message + ". ";
            }
            if (error.errors.message) {
                errorMessage += error.errors.message.message + ". ";
            }
            return res.status(400).json({ success: false, message: errorMessage });
        }

        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// Get all messages (admin only)
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ _id: -1 }); // Sort by newest first
        res.status(200).json({ success: true, messages });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// Delete message (admin only)
export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await Message.findByIdAndDelete(id);
        if (!message) {
            return res.status(404).json({ success: false, message: "Message not found!" });
        }
        res.status(200).json({ success: true, message: "Message deleted successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};