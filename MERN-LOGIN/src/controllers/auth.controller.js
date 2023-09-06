import User from '../models/user.model.js';

export const register = async (req, res) =>{
     const {email, password, username} = req.boy;
    try {
        const newUser = new User({
           username,
           email,
           password 
        });

        console.log(newUser);
        const userSaved = await newUser.save();
        res,json(userSaved);

    } catch (error) {
        res.status(500).json({message : error.message});
    }


    //res.send('Registrando')

}
export const login = (req, res) =>{
    res.send('Logueando')

}
