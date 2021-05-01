const router = require('express').Router()
const db = require('../dbSetup')
const {v4: uuidv4} = require('uuid')

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//*SIGNUP
router.post('/signup', async(req, res) => {
  const username = req.body.username
  const password = req.body.password
  const rePassword = req.body.rePassword
  const email = req.body.email

  //MISSING ANY OF THE FIELDS
  if (!username || !password || !email || !rePassword) return res.status(400).json({message:"Please enter all the fields"})
  
  if (password !== rePassword) return res.status(400).json({message: "Password and re entered password do not match"})

  //BCRYPT INITIALISATION
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt) //RETURN'S A HASHED PASSWORD 

  const signUpUserQuery = await db.query(`INSERT INTO users(user_id, user_username, user_email, user_hashedPassword) VALUES ($1, $2, $3, $4)`, [uuidv4(), username, email, passwordHash ])

  try{
    //CREATING & SIGNING A TOKEN TO SEND TO THE FRONTEND
    const signToken = await jwt.sign(
      {
        username,
        isAdmin: false
      },
      process.env.JWT_SECRET
    )
  
    //SENDING COOKIE TO FRONTEND 
    res.cookie('authenticationToken', signToken).json({wasAuthenticated: true, username})
  } catch(err) {
    res.status(400).json({wasAuthenticated: false})
  }
})

router.post('/login', async(req, res) => {
  const usernameEntered = req.body.username
  const userPassword = req.body.password
  const shouldRememberUser = req.body.rememberMe

  try {
    
    const getUserHashedPasswordQuery = await db.query('SELECT user_hashedPassword FROM users WHERE user_username = $1', [usernameEntered])


    const isUserPasswordCorrect = await bcrypt.compare(userPassword,getUserHashedPasswordQuery.rows[0].user_hashedpassword)
    console.log(userPassword)
    if(!isUserPasswordCorrect) return res.status(401).json({message: 'Please enter the correct password'})

    const signToken = jwt.sign(
      {
        usernameEntered,
        isAdmin: false
      },
      process.env.JWT_SECRET
    )
    
    shouldRememberUser ? (
      res.cookie('authenticationToken', signToken, { httpOnly: true, maxAge: 2*60*60*1000 }).json({wasAuthenticated: true})
    ) : (
      res.cookie('authenticationToken', signToken, { httpOnly: true }).json({wasAuthenticated: true})
    )
  } catch(err) {
    console.log(err.message)
    res.status(400).json({message: err.message})
  }
})

router.get('/logout', async(req, res) => {
  res.clearCookie('authenticationToken').json({message: 'Logged user out'})
})

router.get('/is-logged-in', async(req, res) => {
  try{
    const userToken = req.cookies.authenticationToken

    if(!userToken) return res.status(401).json({isUserLoggedIn: false})

    res.status(200).json({isUserLoggedIn: true})
  } catch(err) {
    res.status(400).json(
      {
        isUserLoggedIn: false
      }
    )
  }
})

module.exports = router