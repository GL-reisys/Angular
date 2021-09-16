const User = require("../models/userModel")


exports.getAllUsers = async (req , res, next) => {
    try{
        const users = await User.find();

        res.status(200).json({
            status: "success",
            results: users.length,
            data: {
                users
            }
        })

    } 
    catch (e){
        res.status(401).json({
            status: "Fail"
        })
    }
};

//GET: localhost:3000/user/:id
exports.getUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })

    } 
    catch (e){
        res.status(401).json({
            status: "Fail"
        })
    }
};

exports.getAuthenticatedUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })

    } 
    catch (e){
        res.status(401).json({
            status: "Fail"
        })
    }
};

exports.authenticateUser = async (req, res, next) => {
    try{
        const user = await User.findOne(req.body);

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })

    } 
    catch (e){
        res.status(401).json({
            status: "Fail"
        })
    }
};

//POST: localhost:3000/user/
exports.createUser = async (req, res, next) => {
    try{

        //req.body.password = passwordHash.generate(req.body.password);

        const user = await User.create(req.body);

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })

    } 
    catch (e){
        res.status(401).json({
            status: "Fail"
        })
    }
};

//Update: localhost:3000/user/:id
exports.updateUser = async (req, res, next) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })

    } 
    catch (e){
        res.status(401).json({
            status: "Fail"
        })
    }
};

//Delete: localhost:3000/user/:id
exports.deleteUser = async (req, res, next) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "success"
        })

    } 
    catch (e){
        res.status(401).json({
            status: "Fail"
        })
    }
};