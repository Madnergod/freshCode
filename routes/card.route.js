const {Router} = require('express')
const Card = require('../models/card')
const config = require('config')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/generate', auth, async (req,res)=>{
    try {
        const {title,description} = req.body
        const card = new Card ({title:title,description:description,owner:req.user.userId})
        await card.save()
        res.status(201).json({card})
    }catch (e){
        res.status(500).json({message:'Что-то пошло не так,попробуйте снова'})
    }
})
router.get('/',auth, async (req,res)=>{
    try {
        const cards = await Card.find({owner:req.user.userId})
        res.json(cards)
    }catch (e){
        res.status(500).json({message:'Что-то пошло не так,попробуйте снова'})
    }
})
router.get('/:id',auth,async (req,res)=>{
    try {
        const card = await Card.findById(req.params.id)///????
        res.json(card)
    }catch (e){
        res.status(500).json({message:'Что-то пошло не так,попробуйте снова'})
    }
})
module.exports = router