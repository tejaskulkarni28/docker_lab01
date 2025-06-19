const express = require('express')


const app = express()


app.get('/', (req, res)=>{

    res.send("Hello! Node.js: Tejas")
})

app.listen(3001, (req, res)=>{
    console.log("Port started on 3001")
})
