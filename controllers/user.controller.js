const user = require("../models/user.model")
const { v4: uuidv4 } = require("uuid")

//get all the user
const getAllUsers = async (req, res) => {
    try {
        const users = await user.find();

        res.status(200).json(users)
    } catch {
        (error) => {
            res.status(500).send(error.message)
        }
    }
}

//get one user
const getOneUser = async (req, res) => {
    try {
        const single_user = await user.findOne({
            id: req.params.id
        })
        res.status(200).json(single_user)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//create user
const createUser = async (req, res) => {
    try {
        const newUser = new user({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })

        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//update user
const updateUser = async (req, res) => {
    try {
        const findUser = await user.findOne({ id: req.params.id })
        findUser.name = req.body.name;
        findUser.age = Number(req.body.age);

        await findUser.save();
        res.status(200).json(findUser)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//delete user
const deleteUser = async (req, res) => {
    try {
        await user.deleteOne({
            id: req.params.id
        })
        res.status(200).json({ message: "User is deleted" })
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser }