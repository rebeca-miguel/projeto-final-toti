const db = require('mongoose')

    db.connect('mongodb+srv://miguel:dOadyVlT7MjBqm19@apicluster2.eovpxpb.mongodb.net/?retryWrites=true&w=majority'
)
.then(() => {
    console.log('conectamos com o MongoDB!')

})
.catch((err) => console.log(err))

module.exports = db;