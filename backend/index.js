import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"review"
})

app.use(express.json())
app.use(cors())

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1); // Uygulamayı durdur
    } else {
        console.log('Connected to MySQL');
    } 
});

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'review',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get("/", (req, res) => {
    console.log("GET request received at /");
    res.json("hello this is the backend");
  });

  app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users;', (err, results) => {
        if (err) {
            console.error('Query error:', err);
            res.status(500).send('An error occurred while fetching users.');
        } else {
            res.json(results);
        }
    });
});

app.post("/users",(req,res)=>{
    const q ="INSERT INTO users (`role`,`username`,`email`,`profilephoto`,`password`) VALUES (?)"
    const values =[
        
        req.body.role,
        req.body.username,
        req.body.email,
        req.body.profilephoto,
        req.body.password
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been created succesfully")
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})

setInterval(() => {
    db.query('SELECT 1', (err) => {
        if (err) {
            console.error('Keeping connection alive failed:', err);
        }
    });
}, 5000); 