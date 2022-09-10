const mongoose = require('mongoose')
const cardapio = mongoose.model('cardapioModels',{

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
        type: parseFloat,
        required:true
     },
     
      
})

module.exports = cardapioModels




