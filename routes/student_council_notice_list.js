const express = require("express");
const router = express.Router();
const passport = require("../config/passport.js");
const pool = require("../db.js");
const templates = require("../lib/templates");

router.get("/", async (req, res) => {
    const data = await pool.query(
    `SELECT * FROM student_council_notice ORDER BY upload_time DESC`
    );
    const time_data = await pool.query(`SELECT date_format(upload_time, '%Y-%m-%d') FROM student_council_notice ORDER BY upload_time DESC`);
    let data_det = data[0];
    res.json({data_det: data_det});
});

module.exports = router;
