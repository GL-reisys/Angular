const Pet = require("../models/petPostModel");

exports.getAllAvailablePets = async (req, res, next) => {
    try{
        debugger
        const pets = await Pet.find({"availability" : true, "postUser" : { $ne : req.params.userid }});
        res.status(200).json({
            status: "success",
            results: pets.length,
            data: {
                pets
            }
        })
    }
    catch(e){
        res.status(401).json({
            status: "Fail"
        })
    }
};

exports.createPetPost = async (req, res, next) => {
    try{
        const pet = await Pet.create(req.body);

        res.status(200).json({
            status: "success",
            data:{
                pet
            }
        });
    }
    catch(e){
        res.status(401).json({
            status: "fail"
        });
    }

}