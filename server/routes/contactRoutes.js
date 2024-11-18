const express = require('express')
const router = express.Router()

const { createContact, getContacts, updateContact, deleteContact, getSingleContact } = require('../controllers/contactController')



router.post('/', createContact)
router.get('/', getContacts)
router.get('/:id', getSingleContact)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)

module.exports = router