import express from 'express';
import bodyParser from 'body-parser';
import productsRoutes from './routes/productsRoute';
import salesRoute from './routes/salesRoute';

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
app.use('/products', productsRoutes);
app.use('/sales', salesRoute);

app.listen(3000, () => console.log('Listening on port 3000'));
