import app from './app.js';

const PORT = process.env.PORT || 5010;

app.listen(PORT, async() => {
    console.log(`App is running at http:localhost:${PORT}`);
});