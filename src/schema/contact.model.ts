import { Schema, model, Document } from 'mongoose';

interface Data extends Document {
  name: string;
  phone: string;
  email: string;
  isBlocked: boolean;
}

let Contact = new Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  isBlocked: {
    type: Boolean
  }
})

export default model<Data>('Contact', Contact);