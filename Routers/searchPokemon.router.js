const express=require('express');
const router=express.Router();

const controller=require('../Controllers/searchPokemon.controller');

router.get('/',controller.pokemonSearch);


module.exports=router;