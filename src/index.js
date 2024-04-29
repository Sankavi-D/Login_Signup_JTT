const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")

const templatePath = path.join(__dirname, '../templates')

//To get hbs files and connect the mangodbs
app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}))


app.get("/", (request, response) => {
    response.render("login")
})

app.get("/signup", (request, response) => {
    response.render("signup")
})

app.post('/signup', async (request, response) => {
    const data = {
        name: request.body.name,
        password: request.body.password
    }

    //Giving Data to MongoDB
    await collection.insertMany([data])

    response.render("home")    
})

app.post('/login', async (request, response) => {
    const data = {
        name: request.body.name,
        password: request.body.password
    }

    //Giving Data to MongoDB
    await collection.insertMany([data])

    response.render("home")    
})

app.listen(3000, () => {
    console.log("Server Running at http://localhost:3000/");
})