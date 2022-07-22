/** @format */

import express from 'express'
import mongoose from 'mongoose'
import orderSchema from './models/Order.js'
import cors from 'cors'

import router from './router.js'

const PORT = process.env.PORT || 4040

mongoose
  .connect(
    `mongodb+srv://Admin:${'538967'}@cluster0.rhpul.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('dbOk'))
  .catch(err => console.log('db error', err))

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.listen(PORT, () => console.log('HEllo'))
