/*******************/
/****  IMPORTS  ****/
/*******************/
import cors from 'cors';
import BodyParser from 'body-parser';
import dotenv from 'dotenv';
import Express from 'express';
import morgan from 'morgan';

import routes from './router';
/*******************/
/*******************/


/*******************/
/** INITIALISATION */
/*******************/
dotenv.config({
    encoding: 'UTF-8'
});

const 
    PORT    = process.env.PORT || 9094, 
    app     = Express();
/*******************/
/*******************/


/*******************/
/**  MIDDLEWARE   **/
/*******************/
app.use(BodyParser.json({}));
app.use(BodyParser.urlencoded({}));
app.use(cors({}));
app.use(morgan('common', {}));
/*******************/
/*******************/


/*******************/
/**    ROUTES     **/
/*******************/
app.use('/mail', routes);
app.use('**', (req, res) => res.send(`Endpoint not found!`));
/*******************/
/*******************/


/*******************/
/** LAUNCH SERVER **/
/*******************/
app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));
/*******************/
/*******************/
