const express=require('express');
const http=require('http');
const bodyParser = require('body-parser');

const pokemonRouter=require('./routers/pokemon.router');
const pokemonViewRouter=require('./routers/viewPokemon.router');
const registrationRouter=require('./routers/registration.router');
const loginRouter=require('./routers/login.router');
const searchRouter=require('./routers/searchPokemon.router');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views')
app.set('view engine','pug');

app.use( express.static( "public" ) );

app.use('/',pokemonRouter);
app.use('/registration',registrationRouter);
app.use('/login',loginRouter);
app.use('/search',searchRouter);
app.use('/',pokemonViewRouter);
http.createServer(app).listen(4000,()=>{console.log('Server running at 127.0.0.1:4000')})
