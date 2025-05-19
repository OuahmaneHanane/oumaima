// import { v4 as uuidv4 } from 'uuid';
import  {User} from "../models/users.js"
// let users = User;

export const getUsers = async(req,res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}


// export const createUser = (req, res) => {9
//     const user = req.body;

//     users.push({...user, id: uuidv4() });

//     res.send(`User with the name ${user.firstName} added to the database!`)
// }

export const createUser = async (req, res) => {
    const user = req.body;
  try {
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }}

  // GET a single user
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return res.status(404).send(`User with id ${id} not found`);
    }

    res.json(foundUser);
  } catch (error) {
    res.status(500).send(`Error retrieving user: ${error.message}`);
  }
};

// DELETE a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).send(`User with id ${id} not found`);
    }

    res.send(`User with id ${id} deleted from the database.`);
  } catch (error) {
    res.status(500).send(`Error deleting user: ${error.message}`);
  }
};

// UPDATE a user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { firstName, lastName, age } },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).send(`User with id ${id} not found`);
    }

    res.send(`User with id ${id} has been updated.`);
  } catch (error) {
    res.status(500).send(`Error updating user: ${error.message}`);
  }
};

// export const getUser = (req, res)=>{
//     const { id }= req.params;

//     const foundUser = users.find((user)=> user.id == id );
//     res.send(foundUser)
// }

// export const deleteUser = (req, res)=>{
//     const { id }= req.params;

//     users = users.filter((user)=> user.id !== id);
//     // users = users.filter((user)=> user.id !== req.params.id);

//     res.send(`User with the id ${id} deleted from the database.`);
// }

// export const updateUser = (req, res)=>{
//     const { id }= req.params;
//     const {firstName, lastName, age} = req.body;
//     const user = users.find((user)=> user.id === id);

//     if(firstName) user.firstName = firstName;
//     if(lastName) user.lastName = lastName;
//     if(age) user.age = age;

//     // const user = users.find((user)=> user.id === req.params.id)
//     // user.username = req.body.username;
//     // user.age = req.body.age;

//     res.send(`User with the id ${id}  has been updated`);
// }