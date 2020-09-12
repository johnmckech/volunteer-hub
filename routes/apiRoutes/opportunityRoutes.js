const express = require('express');
const router = express.Router();
const db = require('../../config/connection');
const inputCheck = require('../../utils/inputCheck');
const { Opportunity, Volunteer } = require('../../models');

// Get all opportunities
/*
router.get('/opportunities', (req, res) => {
    const sql = `SELECT opportunities.*,`;
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
//With volunteers assigned to project when functionality added
router.get('/', (req, res) => {
    Opportunity.findAll({})
        .then((opportunities) => res.json(opportunities))
        .catch((err) => res.status(500).json(err));
});


// Get single opportunity
/*
router.get('/opportunities', (req, res) => {
    const sql = `SELECT opportunities.*`;
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
*/
router.get('/:id', (req, res) => {
    Opportunity.findOne({
        where: {
            id: req.params.id,
        },
    })
        .then((opportunities) => res.json(opportunities))
        .catch((err) => res.status(400).json(err));
});

// Create an opportunity
/*
router.post('/opportunity', ({ body }, res) => {
    const errors = inputCheck(body, 'opportunityName', 'languages', 'techKnowledge', 'specialKnowledge');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO opportunities (opportunityName, languages, techKnowledge, specialKnowledge) 
              VALUES (?,?,?,?)`;
    const params = [body.opportunityName, body.langauges, body.techKnowledge, body.specialKnowledge];
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
*/

router.post('/', (req, res) => {
    console.log(req.body)
    Opportunity.create({
        opportunityName: req.body.opportunityName,
        languages: req.body.languages,
        techKnowledge: req.body.techKnowledge,
        specialKnowledge: req.body.specialKnowledge,
        HoursPerWeek: req.body.HoursPerWeek,
    })
        .then((opportunities) => res.status(200).json(opportunities))
        .catch((err) => res.status(400).json(err));
});

/*
router.put('/opportunity/:id', (req, res) => {
    const errors = inputCheck(req.body, 'party_id');

    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    //how to do multiple edit queries in sql?
    const sql =
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

router.put('/', (req, res) => {
    Opportunity.create({
        opportunityName: req.body.opportunityName,
        languages: req.body.languages,
        techKnowledge: req.body.techKnowledge,
        specialKnowledge: req.body.specialKnowledge,
        HoursPerWeek: req.body.HoursPerWeek,
        where: {
            id: req.params.id,
        },
    })
        .then((opportunities) => res.status(200).json(opportunities))
        .catch((err) => res.status(400).json(err));
});

module.exports = router;