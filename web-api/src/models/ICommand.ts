import { Document } from 'mongoose'

export default interface ICommand extends Document {
  command: string
  description: string
  createdAt: Date
}
