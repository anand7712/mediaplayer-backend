//import jsoon server

const jsonserver=require('json-server')

//create server

const mediaplayerserver = jsonserver.create()

//create middleware to convert the json format

const middleware=jsonserver.defaults()

//import db.json file

const router=jsonserver.router("db.json")

//set port for server

const PORT=4000 || process.env.PORT 

//server use middleware

mediaplayerserver.use(middleware)
mediaplayerserver.use(router)

//listen()

mediaplayerserver.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT}`);
    
})