const router=require("express").Router() 
const {setStories,getStories}=require("../controllers/stories")

// handle User

router.post("/api/setStories",setStories)
router.get("/api/getStories",getStories)

// export
module.exports=router; 