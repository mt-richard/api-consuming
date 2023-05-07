const express = require ('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/participants', require('./routes/participants.js'))
// app.use('/admin', require('./routes/admin.js'))
app.use('/auth', require('./routes/auth.js'))

const port = 5500
app.listen(port, function () {
    console.log(`Server running on http://localhost:${5500}`)
})