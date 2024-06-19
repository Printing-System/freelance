import express from "express";
import morgan from 'morgan';

const app = express();

app.use(express.json());


app.use(morgan('dev'));

app.use('/ping' ,(req,res) => {
    res.send('Pong');
});

app.all('*' , (req,res) => {
    res.status(404).send('OOPS!! 404 page not found');
});

export default app;