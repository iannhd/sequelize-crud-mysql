const express = require('express')
const app = express()
const cors = require('cors')

var corOption = {
    origin : "https://localhost:3002"
}


// Middleware

app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Testing Get

app.get('/', (req, res) => {
    res.json({message: "hello from api"})
})

// Route

const router = require('./routes/productRoute') 

// Product Route
app.use('/api/products', router)


app.listen(7002, () => {
    console.log('this server is running on port 7002')
})