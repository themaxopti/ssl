const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors({origin:'*'}))

app.get('/api/test',(req,res,next) => {
    res.json('test ssl')
    next()
})

app.get('/',(req,res,next) => {

    res.send('Maximilen')

    next()
})

app.listen(3000,() => {
    console.log('Server has been started');
})