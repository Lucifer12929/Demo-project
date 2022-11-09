const router = require('express').Router()
const userContact = require('../controllers/userContact')

router.post('/contact', userContact.contact)

module.exports = router;