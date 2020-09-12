const express = require('express');
const router = express.Router();
const db = require('../../config/connection')
const inputCheck = require('../../utils/inputCheck');
const { Volunteer, Opportunity } = require('../../models');

// Get all volunteers
/*
router.get('/volunteers', (req, res) => {
    const sql = `SELECT volunteers.*,`;
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});
*/
//With opportunity assign- when functionality added
router.get('/', (req, res) => {
    Volunteer.findAll({})
        .then((volunteers) => res.json(volunteers))
        .catch((err) => res.status(500).json(err));
});


//Get single volunteer

router.get('/volunteers', (req, res) => {
    const sql = `SELECT volunteers.*`;
    const params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: row
        });
    });
});


router.get('/:id', (req, res) => {
    Volunteer.findOne({
        where: {
            id: req.params.id,
        },
    })
        .then((volunteers) => res.json(volunteers))
        .catch((err) => res.status(400).json(err));
});



// Create an volunteer

router.post('/volunteer', (req, res) => {
    //const errors = inputCheck(body, 'first_name', 'last_name', 'email', 'languages', 'techKnowledge', 'specialKnowledge', 'hoursPerWeek');
    //if (errors) {
    //    res.status(400).json({ error: errors });
    //    return;
    //}
    console.log("This is is body ", req.body)
    const sql = `INSERT INTO volunteers (user, last_name, email, languages, techKnowledge, specialKnowledge hoursPerWeek) 
              VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.email, body.langauges, body.techKnowledge, body.specialKnowledge, body.hoursPerWeek];
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: body,
            id: this.lastID
        });
    });
});



router.post('/', (req, res) => {
    Volunteer.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        languages: req.body.languages,
        techKnowledge: req.body.techKnowledge,
        specialKnowledge: req.body.specialKnowledge,
        HoursPerWeek: req.body.HoursPerWeek,
    })
      .then((volunteers) => res.status(200).json(volunteers))
      .catch((err) => res.status(400).json(err));
  });


/*
router.put('/volunteer/:id', (req, res) => {
    const errors = inputCheck(req.body, 'party_id');

    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    //how to do multiple edit queries in sql?
     
    const params = [req.body.party_id, req.params.id];

    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: req.body,
            changes: this.changes
        });
    });
});
*/
router.put('/:id', (req, res) => {
    Volunteer.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        languages: req.body.languages,
        techKnowledge: req.body.techKnowledge,
        specialKnowledge: req.body.specialKnowledge,
        HoursPerWeek: req.body.HoursPerWeek,
        where: {
            id: req.params.id,
        },
    })
        .then((volunteers) => res.status(200).json(volunteers))
        .catch((err) => res.status(400).json(err));
});

module.exports = router;