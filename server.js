const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Here')
    //res.status(500).send('Hi')

    res.render('index')
})

app.listen(3000)

