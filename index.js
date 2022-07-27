const express = require("express")
const app = express()
const redditData = require("./data.json")

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    res.render("home") //render home.ejs, default path is ./views
})

app.get("/cats",(req,res)=>{
    const cats=[
        "Blue", "Rocket", "Monty", "Stephanie", "Winston"
    ]
    res.render("cats",{cats})
})

app.get("/r/:subreddit",(req,res)=>{
    const {subreddit}=req.params
    const data = redditData[subreddit]
    if (data){
        res.render("subreddit",{...data})
    }else{
        res.render("notfound",{subreddit})
    }
})

app.get("/rand",(req,res)=>{
    const num = Math.floor(Math.random()*10+1)
    res.render("random",{num})  //export value to random.ejs
})

app.listen(8080,()=>{
    console.log("Listening post 8080")
})