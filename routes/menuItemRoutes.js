const express = require("express");
const router = express.Router();
const MenuItem =require('./../models/MenuItem')

//menuitem
router.post('/', async (req,res)=>{
    try{
        const data =req.body
        const newMenu = new MenuItem (data);
        const response =await newMenu.save();
        console.log('data saved menu');
        res.status(200).json(response);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Internal server error"})
    }
})

//menu get
router.get('/',async (req,res)=>{
  try{
    const data =await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
})

router.get('/:tasteType', async (req,res)=>{
  try{
  const tasteType = req.params.tasteType;
  if (tasteType == "sweet" || tasteType == "spicy" || tasteType == 'sour') {
      const response =await MenuItem.find({taste: tasteType});
      console.log('response fetched');
      res.status(200).json(response);
  } else {
      res.status(404).json({error: "Invalid work type"});
  }    
  }catch(err){
      console.log(err);
      res.status(500).json({error: "Invalid work type"})
  }
})

router.put('/:id',async (req,res)=>{
  try{
      const menuId =req.params.id;
      const updatedMenuData =req.body;

      const response =await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
          new:true,
          runValidators:true,
      })
      if(!response) {
          return res.status(400).json ({error: 'menu not found'})
      }

      console.log('data updated');
      res.status(200).json(response);
  }catch(err){
      console.log(err);
      res.status(500).json({ error: 'Internal Server error'})
  }
})

router.delete('/:id', async (req,res)=>{
  try{
   const menuId =req.params.id;

  const response = await MenuItem.findByIdAndDelete(menuId);

  if(!response) {
      return res.status(400).json ({error: 'person not found'})
  }
  console.log('data deleted');
  res.status(200).json({message: 'person Deleted Successfully'});
  }catch(err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server error'})
  }
})

module.exports=router;