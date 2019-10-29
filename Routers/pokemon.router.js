const express=require('express');
const router=express.Router();

const controller=require('../Controllers/pokemon.controller');

router.get('/',controller.pokemon);

module.exports=router;