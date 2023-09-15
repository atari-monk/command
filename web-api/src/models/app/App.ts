import mongoose, { Schema } from 'mongoose'
import IApp from './IApp'

const typeName = 'App'

const schema = new Schema<IApp>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const Command = mongoose.model<IApp>(typeName, schema)
