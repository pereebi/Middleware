import express from 'express';
import routes from './routes';

const app = express();

const port = 8000;

app.use ('/api', routes);

app.listen(port, () => {
    console.log('Listtening on', port);
})

console.log("Hello");