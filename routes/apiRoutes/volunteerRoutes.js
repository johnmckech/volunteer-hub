const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

// Get all volunteers
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

// Get single volunteer
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

// Create an volunteer
router.post('/volunteer', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'email', 'languages', 'techKnowledge', 'specialKnowledge', 'hoursPerWeek');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO volunteers (first_name, last_name, email, languages, techKnowledge, specialKnowledge hoursPerWeek) 
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

router.put('/volunteer/:id', (req, res) => {
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

module.exports = router;