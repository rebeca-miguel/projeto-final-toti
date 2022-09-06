// config inicial
const express = require ('express')
const app = express ()
const mongoose = require('mongoose')



// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())


// rota inicial / endepoint
app.get('/',(req, res)=>{
    //mostrar requisição
    res.json({message: 'oi Express'})
})

const DB_USER = 'miguel'
const DB_PASSWORD = encodeURIComponent('Rebeca')
//dOadyVlT7MjBqm19

//mongodb+srv://miguel:dOadyVlT7MjBqm19@apicluster2.eovpxpb.mongodb.net/?retryWrites=true&w=majority



mongoose 
    .connect(
        'mongodb+srv://DB_USER:DB_PASSWORD@apicluster2.eovpxpb.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log("conectamos ao MongoDB!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))

// entregar uma porta
app.listen(3000)