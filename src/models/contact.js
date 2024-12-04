import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // age: {
    //   type: Number,
    //   required: true,
    // },
    // gender: {
    //   type: String,
    //   required: true,
    //   enum: ['male', 'female', 'other'],
    // },
    // avgMark: {
    //   type: Number,
    //   required: true,
    // },
    // onDuty: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    // parentId: { type: Schema.Types.ObjectId, ref: 'users' }, // нова властивість

    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = model('contacts', contactSchema);
