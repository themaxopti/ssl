const express = require('express')

const app = express()

app.get('/',(req,res,next) => {

    res.send('Maximilen')

    next()
})

app.listen(3000,() => {
    console.log('Server has been started');
})