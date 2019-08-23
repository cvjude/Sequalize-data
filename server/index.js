import express from 'express';
import routes from './routes';
import debug from 'debug';

const app = express();
app.use(express.json());
app.use('/myApp', routes);

app.get('/home', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to the sequelize tester'
  });
});

app.listen(5001, () => {
  console.log('Server is on 5001');
});

export default app;
