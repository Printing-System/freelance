// import { connect } from 'mongoose';
import app from './app.js';
import connectionToDB from './config/dbConfig.js';

const PORT = process.env.PORT || 5010;

app.listen(PORT, async() => {
    await connectionToDB();
    console.log(`App is running at http:localhost:${PORT}`);
});