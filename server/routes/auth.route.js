import express from 'express'
const router = express.Router()

router.get('/signup', (req, res)=>{
    res.send('Signed up')
})
router.get('/login', (req, res)=>{
    res.send('Logged in')
})
router.get('/logout', (req, res)=>{
    res.send('Logged out')
})

export default router;