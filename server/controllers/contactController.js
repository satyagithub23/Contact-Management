const Contact = require('../models/contactModel')

exports.createContact = async (req, res) => {
    const { firstName, lastName, email, phone, company, job } = req.body
    try {
        await Contact.create({ firstName, lastName, email, phone, company, job })
        res.status(200).json({ message: "success" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()
        res.status(200).json({ message: "success", contacts: contacts })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
}

exports.updateContact = async (req, res) => {
    const id = req.params.id
    console.log(id);
    const { firstName, lastName, email, phone, company, job } = req.body
    console.log({ firstName, lastName, email, phone, company, job });
    
    try {
        const updatedContact = await Contact.updateOne({ _id: id }, { $set: { firstName, lastName, email, phone, company, job } })
        res.status(200).json({ message: "success", updated: updatedContact })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

exports.deleteContact = async (req, res) => {
    const id = req.params.id
    try {
        const deletedContact = await Contact.deleteOne({ _id: id })
        res.status(200).json({ message: "success", deleted: deletedContact })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}