const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

const conStr = {
    host: 'api.tracke.wmdd.ca',
    database: 'hstracke_db',
    user: 'hsingh',
    password: 'Armaan@123'
}


const con = mysql.createConnection(conStr);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

 let car;
 
app.get('/ulist', (req, res) => {
    let qry = 'SELECT firstName, lastName, userId from users Where active=1 ORDER BY firstName';
    con.query(qry, (err, response) => {
        if(err) throw err;
        let ulist = [];
        for (let i = 0; i < response.length; i++){
            ulist.push({
                name: `${response[i].firstName } ${response[i].lastName }`, 
                userId: response[i].userId
            })
        }
        res.send(ulist);
    });
})

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
app.get('/elist', (req, res) => {
    let qry = 'SELECT amount, detail from transaction Where userId=1';
    con.query(qry, (err, response) => {
        if(err) throw err;
        let ulist = [];
        for (let i = 0; i < response.length; i++){
            ulist.push({
                name: `${response[i].firstName } ${response[i].lastName }`, 
                userId: response[i].userId
            })
        }
        res.send(ulist);
    });
})
app.get('/view', (req, res) => {
    let qry = `SELECT * from transaction Where userId=${req.query.userID}`;

    con.query(qry,(err, response)=>{
        if (err) throw err;
        let ulist = [];
        for (let i = 0; i < response.length; i++){
            ulist.push({
                amount: response[i].amount , 
                detail: response[i].detail
            })
        }
        res.send(ulist);
    })

})






// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
app.post('/signup', (req, res) => {
    let newRec = {
        active: 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        sinceDate: req.body.sinceDate,
        email: req.body.email,
        password: req.body.password
    };

    let insertedID;
    con.query('INSERT INTO users SET ?', newRec, (err, response)=>{
        if(err) throw err;
        res.send({msg: `Record added with an ID of ${response.insertId}` })
        insertedID = response.insertId;
    })

    setTimeout(() => {
        let insertAddress= {
            userID: insertedID,
            postalCode: req.body.postalCode,
            city: req.body.city,
            province: req.body.province,
            country: req.body.country,
            addressType: 'Primary'
        }
        con.query('INSERT INTO address SET ?', insertAddress, (err)=>{
            if(err) throw err;
            console.log('address record added');
        })
    },3000)
   
})


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
app.listen(port, () => {
    console.log(`The Server is Up and Running on ${port}`);
})