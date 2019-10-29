const express=require('express');
const router=express.Router();

const controller=require('../Controllers/viewPokemon.controller');

router.get('/:id',controller.pokemonView);

module.exports=router;