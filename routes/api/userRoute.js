// /api/users

// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser)
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)


module.exports = router