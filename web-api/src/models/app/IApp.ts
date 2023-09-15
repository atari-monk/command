import { Document } from 'mongoose'

export default interface IApp extends Document {
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}
