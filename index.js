// config inicial
const express = require ('express')
const app = express ()
const mongoose = require('mongoose')
const  cardapio = require('../models/cardapioModels')


// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//rotas da api

app.post('/cardapioModels',async (req, res) => {
    //req.body
    const {categoria, descricao,nome, preco,} = req.body

    const cardapio = {
        categoria,
        descricao,
        nome,
        preco  
    }

    try{
        
        cardapioModels.create(cardapioModels)

        res.status(201).json({message: 'produto criado com sucesso'}) 
        
        

    } catch (error) {
        res.status(500).json({ error: error }) 
    }

})

//rota inicial / endepoint
    app.get('/',(req, res)=>{
    //mostrar requisição
    res.json({message: 'oi Express'})
})

const DB_USER = 'miguel'
const DB_PASSWORD = encodeURIComponent('dOadyVlT7MjBqm19')
//dOadyVlT7MjBqm19

//mongodb+srv://miguel:dOadyVlT7MjBqm19@apicluster2.eovpxpb.mongodb.net/?retryWrites=true&w=majority

mongoose 
    .connect(
        'mongodb+srv://miguel:dOadyVlT7MjBqm19@apicluster2.eovpxpb.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => {

        console.log("conectamos com o MongoDB!")
        app.listen(3000)

    })
    .catch((err) => console.log(err))

// entregar uma porta

app.listen(3000)
console.log("conectamos com o MongoDB!")


