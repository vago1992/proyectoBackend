const { Router } = require('express')

const router =  Router()

const users = [
    { id: '1', name: 'Tomas', last_name: 'Juarez', gender: 'M' },
    { id: '2', name: 'Pedro', last_name: 'Gonzalez', gender: 'M' },
    { id: '3', name: 'Lucrecia', last_name: 'Lopez', gender: 'F' },
    { id: '4', name: 'Carla', last_name: 'Garcia', gender: 'F' },
    { id: '5', name: 'Juan', last_name: 'Alvarez', gender: 'M' }   
]

router.get('/', (req, res)=>{
    let testUser = {
        name: 'Santiago',
        last_name: 'Leonardis',
        role: 'admin'
    }

    res.render('index', {
        user: testUser,
        isAdmin: testUser.role === 'admin',
        users,
        style: 'index.css'
    })
})

router.get('/register', (req, res)=>{
    // const {name, last_name, email, phone} = req.body
    res.render('register')
})

module.exports = router