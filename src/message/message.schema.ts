import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    channel: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' },
  },
  { timestamps: true },
);

export const MessageModel = mongoose.model('message', MessageSchema);
