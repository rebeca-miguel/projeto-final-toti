const express = require ('express')
const router = express.Router()
// router.post('../cardapio/create.cardapioMode')
const cardapio = require('../models/Cardapio')


router.post('/card', async (req, res) => {
    const card = req.body
    try{
        const resposta = await new cardapio(card).save()
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})

router.post('/card/pesquisar', async (req, res) => {
    
    try{
        const resposta = await cardapio.find({
            titulo: req.body.titulo
        })
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})
router.post('/card/pesquisar/categoria', async (req, res) => {
    
    try{
        const resposta = await cardapio.find({
            categoria: req.body. categoria
        })
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})
router.get('/card', async (req, res) => {
    
    try{
        const resposta = await cardapio.find()
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const resposta = await cardapio.findById(id)
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body
    try{
        const resposta = await cardapio.findByIdAndUpdate(id, body)
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        await cardapio.findByIdAndDelete(id)
        res.status(200).json({error: false, message: 'card deletado com sucesso do cardapio!'})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})


//rotas da API

// router.post('./Cardapio', async(req, res) => {
//     //req.body
//     const {categoria, nome, descicao, preco, require} = req.body
//     //(categoria:alimento, nome:Pizza, descrição: calabresa, preço: 36,require:true)
    
//     if(!cardapio) {
//         res.status(422).json({error: 'O cardapio foi inserido com suceso'})
//     }

//     //criar atributo
//     const cardapio = {
//         categoria,
//         titulo,
//         descricao,
//         preco,
//         require
//     }
//     try{
//         //criando dados
//         await Cardapio.create(cardapio)

//         res.status(201).json({message: 'Cardapio inserido com sucesso no sistema!'})

//     }catch (err) {
//         res.status(500).json({error:error})
//     }
// })


//rota inicial
router.get('/',(req, res) => {
    //mostrat rota
    res.json({message: 'olá express!'})
})

module.exports = router
