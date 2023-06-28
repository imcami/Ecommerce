import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const userDB=  userModel.findOne({email});
    if(!userDB) return res.status(400).json({message: "User not found"});
    const isPasswordCorrect =  compareData(password, userDB.password);
    if(!isPasswordCorrect) return res.status(401).json({message: "Wrong email or password"}
    )
     const token =  generateToken(userDB);
     res.status(200).json({message: "Login success", token});
});

router.get('/validation', jwtValidation, (req, res) => {
    const {email} = req.user;
    res.send('Probando ${email}')
})




export default router;
