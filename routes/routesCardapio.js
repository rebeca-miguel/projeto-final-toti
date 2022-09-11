const express = require ('express')
const router = require('express').Router
router.post('../cardapio/create.cardapioModels')

app.use(
    express.urlencoded({
        extended:true
    })
)


app.use(express.json())

//rotas da API

router.post('./Cardapio', async(req, res) => {
    //req.body
    const {categoria, nome, descicao, preco, require} = req.body
    //(categoria:alimento, nome:Pizza, descrição: calabresa, preço: 36,require:true)
    
    if(!cardapio) {
        res.status(422).json({error: 'O cardapio foi inserido com suceso'})
    }

    //criar atributo
    const cardapio = {
        categoria,
        nome,
        descricao,
        preco,
        require
    }
    try{
        //criando dados
        await Cardapio.create(cardapio)

        res.status(201).json({message: 'Cardapio inserido com sucesso no sistema!'})

    }catch (err) {
        res.status(500).json({error:error})
    }
})


//rota inicial
app.get('/',(req, res) => {
    //mostrat rota
    res.json({message: 'olá express!'})
})

module.exports = router
