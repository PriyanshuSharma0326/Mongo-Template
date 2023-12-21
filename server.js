import express from 'express';
// import userRrouter from './Routes/userRoutes.js';
import router from './Routes/productRoutes.js';

const app = express();
const PORT = 5000;

// app.use(express.static('./Client'));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.text());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to HTTP methods!</h1>')
});

// app.use('/api/v1/users', userRrouter);
app.use('/api/v1/products', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
