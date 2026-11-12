/*
Purpose: 
express framwork with Node.js
- Try get, post, put and delete methods
- use routes instead of pure paths - like an api in your own softwares backend
- Compare and contrast GET query vs params

*/

const express = require("express");
const app = express()

const SERVER_PORT = process.env.PORT || 3000; 

// Middleware set up for each of out needs on the web server
// Serving static files 
// Public folder is not accessable by default
// Notice there is no real folder in our filesystem called static 
// But this will be a path we can access in the URL 

app.use("/static",express.static("public")) 

// exec04: also serve public/ at the root so the file is reachable at /instruction.html
app.use(express.static("public"))

// Serving JSON 

app.use(express.json())

// Serving traditional html body 
//if we add the object parameter with property extended: true 
// we can use the library qs instead of library querystring

app.use(express.urlencoded({extended: true}))

// --------------------------------------------------------------

// https://localhost:3000

app.get("/", (request, response) => {
    response.send("<h1> Welcome to the root path of the server </h1>");
})

//https://localhost:3000/hello

app.get("/hello", (request,response) => {
    response.type("text/plain").send("Hello Express JS")
})

// exec04: GET /user?firstname=&lastname= (query parameters, with defaults)
app.get("/user", (request, response) => {
    const firstname = request.query.firstname || "Pritesh";
    const lastname = request.query.lastname || "Patel";
    response.json({firstname, lastname})
})

// exec04: POST /user/:firstname/:lastname (path parameters)
app.post("/user/:firstname/:lastname", (request, response) => {
    const {firstname, lastname} = request.params;
    response.json({firstname, lastname})
})

// exec04: POST /users (body is an array of {firstname, lastname})
app.post("/users", (request, response) => {
    const users = Array.isArray(request.body) ? request.body : [];
    response.json(users)
})

app.get("/college", (request, response) => {
    const college = {
        method:"GET",    // this was not built in, we created this property 
        name:"George Brown College",
        location:"Toronto",
        established:1967
    }
    response.json(college)    // we treat out backend as an API
})

app.get("/students/:name/:age/:city", (request, response) => {
    console.log(express.request.params)
    if(!request.params.name || !request.params.age || !request.params.city){
        return response.status(400).json({error: "Missing path parameters"})
    }
    const name = request.params.name;
    const age = request.params.age;
    const city = request.params.city;

    response.json ({
        student_name: name,
        student_age : age,
        student_city: city
    })
})



app.post("/college",() => {
    const college = {
        method:"POST",    // this was not built in, we created this property 
        name:"George Brown College",
        location:"Toronto",
        established:1967
    }
})

app.put("/college", (request, response) => {
 const college = {
        method:"PUT",    // this was not built in, we created this property 
        name:"George Brown College",
        location:"Toronto",
        established:1967
    }
})


app.delete("/college", (request, response) => {
const college = {
        method:"DELETE",    // this was not built in, we created this property 
        name:"George Brown College",
        location:"Toronto",
        established:1967
    }
})

app.listen(SERVER_PORT, () => {
    console.log("Server is running on https://localhost:" + SERVER_PORT)
})