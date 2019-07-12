const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.get('/', (req, res) => { 
  console.log("req.boyd", req.body);
  const queryText = 'SELECT * FROM "pose"';
  pool.query(queryText)
    .then((result) => {
      console.log(result);
      res.send(result.rows)
    })
    .catch(() => res.sendStatus(500));
});

router.post('/', (req, res) => {  
  console.log("REQ DOT BODY", req.body)
  const name = req.body.poseName;
  const purpose = req.body.purpose;
  const url = req.body.imageUrl;

  const queryText = 'INSERT INTO "pose" ("name", "purpose", "imageUrl") VALUES ($1, $2, $3)';
  pool.query(queryText, [name, purpose, url])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
