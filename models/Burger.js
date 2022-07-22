/** @format */

import mongoose from 'mongoose'

const burgerShema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
})

export default mongoose.model('burger', burgerShema)
