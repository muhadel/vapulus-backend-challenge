import * as mongoose from 'mongoose';

export const ChannelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
);

export const ChannelModel = mongoose.model('channel', ChannelSchema);
