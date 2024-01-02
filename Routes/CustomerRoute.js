const express=require('express');

const CustomerController=require('../controller/CustomerController');

const veryfyUser=require('../middlewear/AuthMiddelwear');

const router=express.Router();

// router.post('/create',veryfyUser,CustomerController.create);
router.post('/create',CustomerController.create);
router.get('/findById',veryfyUser,CustomerController.findById);
router.delete('/deleteById',veryfyUser,CustomerController.deleteById);
router.put('/update',veryfyUser,CustomerController.update);
router.get('/findAll',veryfyUser,CustomerController.findAll);

module.exports=router;