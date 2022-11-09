const Contactdb = require("../models/contactModel");
const userContact={
    contact: async (req, res) => {
  
        //console.log(req.body);
        //get email and the password from the frontend
        //whenever have a post request u get all the data through the req.body
        //create the user but first hash the pwd
        console.log(req.body);
    
        try {
          const { name, email, phone, message } =
            req.body;
          
          
         
            const newUser = new Contactdb({ name, email, phone,message });
            await newUser.save();
            res.json({ msg: "We have recieved your request" });
          
          console.log(newUser)
          
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },
}
module.exports=userContact;