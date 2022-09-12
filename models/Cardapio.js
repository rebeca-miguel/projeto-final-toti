const mongoose = require('mongoose')
const CardapioSchema = new mongoose.Schema({

   categoria:{
        type:String,
        required: true
     },
   titulo:{
        type: String,
        required: true
     },
   descricao:{
        type: String,
        required: true
     },
   preco:{
        type: Number,
        required:true
     },
     
      
})

module.exports = mongoose.model("Cardapio", CardapioSchema)




