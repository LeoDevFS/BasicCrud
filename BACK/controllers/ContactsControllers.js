const Contact = require('../models/Contacts')

const ContactController={
        async getAll (req,res){
            try {
                const contacts = await Contact.find()
                res.json(contacts)
                console.log(contacts.length)
            } catch (error) {
                console.log(error)
            }
        },
        async create (req,res){
            try {
                const contact = await Contact.create({...req.body})
                res.status(201).send(contact)
            } catch (error) {
                console.log(error)
            }
        },
        async getByID (req,res){
            try {
                const id = req.params._id
                const contact = await Contact.findById(id)
                res.json(contact)
            } catch (error) {
                console.log(error)
            }
        },
        async deleteById (req,res){
            try {
                const id = req.params._id
                const contact = await Contact.findByIdAndDelete(id)
                if (!contact) {
                    res.json({message:"contact not found"})
                }
                res.json(`contact ${contact.name} Eliminated`)
            } catch (error) {
                console.log(error)
            }
        },
        async updateByID (req,res){
            try {
                const id = req.params._id
                const {name,lastName,number,email}=req.body

                const contact = await Contact.findByIdAndUpdate(id,{
                    name,
                    lastName, 
                    number,
                    email
                },{new:true})
                if (!contact) {
                    res.json({message:"contact not found"})
                }
                res.json(`contact ${contact.name} Updated`)
                console.log("Resultado de la actualización en la base de datos:", contact);
            } catch (error) {
                console.log(error)
            }
        }

        
}
module.exports = ContactController