import express from 'express'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.controller.js'
const router = express.Router()
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js"

// CREATE
router.post('/', verifyAdmin, createHotel)
// UPDATE
router.put('/:id', verifyAdmin, updateHotel)
// DELETE
router.delete('/:id', verifyAdmin, deleteHotel)
//GET
router.get('/:id', getHotel)
//GET ALL
router.get('/', getHotels)

export default router
