import mongoose, { Schema } from 'mongoose'
import ICommand from './ICommand'

const typeName = 'Command'

const schema = new Schema<ICommand>({
  command: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const Command = mongoose.model<ICommand>(typeName, schema)
