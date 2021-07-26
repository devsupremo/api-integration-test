import consola from 'consola';
import cors from 'cors';
import express from 'express';

import database from './database/mongo';
import routes from './routes';

const app = express();
app.use(cors());
app.use(routes);

app.listen(3334, () => {
  consola.success('Server iniciado na porta 3334 :)');
});
