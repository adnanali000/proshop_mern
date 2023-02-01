import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'rehman',
        email: 'rehman@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'adnan',
        email: 'adnan@example.com',
        password: bcrypt.hashSync('123456',10),
    },
]

export default users