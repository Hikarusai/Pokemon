const express=require('express');
const router=express.Router();

const controller=require('../Controllers/registration.controller');


router.get('/',controller.registration);

router.post('/',controller.postRegistration);

module.exports=router;