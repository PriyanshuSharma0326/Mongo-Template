import express from 'express';
import router from './Routes/productRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = 5000;

app.use(express.static('./Client'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to HTTP methods!</h1>')
});

app.use('/api/v1/products', router);

mongoose.connect(process.env.CONNECTION_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});
