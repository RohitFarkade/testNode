import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    userIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
});
// contactSchema.index({ userId: 1, phone: 1 }, { unique: true });
const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
