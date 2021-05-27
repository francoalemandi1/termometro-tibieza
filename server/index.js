const express = require( "express" );
const app = express();
const dotenv = require('dotenv');

const cors = require('cors')
app.use(cors());

const { questionsRouter } = require('./routes/questions');
const { celebritiesRouter } = require('./routes/celebrities');
const { itemsRouter } = require('./routes/items');
const { directivesRouter } = require('./routes/directives');

dotenv.config();

const port = process.env.PORT || 8080

app.use(express.json());

// Routes
app.use("/questions", questionsRouter);
app.use('/celebrities', celebritiesRouter);
app.use('/items', itemsRouter);
app.use('/directives', directivesRouter);

// define a route handler for the default home page
app.get( "/", ( req  , res ) => {
    res.send( "Hola world" );
} );

// start the Express server
app.listen(process.env.PORT || port, () => {
    console.log( `server started ${ port }` );
} );

