const mongoose = require('mongoose')
const Cardapio = mongoose.model('Cardapio',{

   categoria:{
        type:String,
        required: true
     },
   nome:{
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

module.exports = Cardapio;




