import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import cors from 'cors';
import loginUser from './middleware/login-user';
import bodyParser from 'body-parser';
import hasToken from './middleware/has-token';

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  '/graphql',
  hasToken,
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.use('/login', loginUser);
app.listen(4000);
// eslint-disable-next-line no-console
console.log('Running a API server at http://localhost:4000');
