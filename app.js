import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import __dirname from './util/rootpath.js'
import expressRouter from './routes/express.js';
import nodejsRouter from './routes/nodejs.js';
import greetingRouter from './routes/greeting.js';
import Indexrouter from './routes/index.js';

const app = express()

const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.get("/", (req, res) => {
    res.send('Hi, there!')
});

app.get("/index", Indexrouter);
app.get("/express", expressRouter);
app.get("/nodejs", nodejsRouter);
app.get("/greeting", greetingRouter);


app.listen(PORT, () => console.log(`Fut a http://localhost:${PORT}`))

