const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ProjectModel = require('../model/project')

router.get('/', (req, res) => {

    // ovo je probno
    const project = new ProjectModel({
        name: 'J',
        email: 'j.j@example.com',
        age: 32,
    })
    
    project.save()
        .then(() => console.log('Document saved to database...'))
        .catch(err => console.error('Error saving document...', err));
    //
    
    res.status(200).send('done')
})

router.post('/', (req, res) => {

   /*  var naziv_projekta = req.body.naziv_projekta;
    var opis_projekta = req.body.opis_projekta;
    var cijena_projekta = req.body.cijena_projekta;
    var obavljeni_poslovi = req.body.obavljeni_poslovi;
    var datum_pocetka = req.body.datum_pocetka;
    var datum_zavrsetka = req.body.datum_zavrsetka; */

    const Example = mongoose.model('Example', Number)

    const example = new Example(123)

    example.save()
        .then(() => console.log('Document saved to database...'))
        .catch(err => console.error('Error saving document...', err));

    res.status(200)
})

module.exports = router