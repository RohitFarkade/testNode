import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Single user reference
    name: { type: String, required: true },
    phone: { type: String, required: true }, // Removed unique: true
});

// Optional: Add a compound index to ensure a user can't add the same phone number twice
contactSchema.index({ userId: 1, phone: 1 }, { unique: true });

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;