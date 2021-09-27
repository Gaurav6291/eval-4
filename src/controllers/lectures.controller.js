const express = require('express');

const Lecture = require('../models/lectures.model');

const router = express.Router();

router.post("/", async(req, res) => {
    const lectures = await Lecture.create(req.body);
    return res.status(201).json({lectures});
});
router.get("/", async(req, res) => {
    const lectures = await Lecture.create(req.body);
    return res.status(201).json({lectures});
});

module.exports = router