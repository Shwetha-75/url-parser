require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {MongoClient} = require("mongodb");


// Basic Configuration
const port =3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(express.static('public'));
app.get('/', (_, res) => res.sendFile(__dirname + '/public/index.html'));



const urlDataBase={};
let shortId=1;

// create the shortname for url 
app.post("/api/shorturl",(req,resp)=>{
   console.log(req.body.url)
   const url=req.body.url; 
   let value=shortId;
   let result={}
   try{
       const parser = new URL(url);
        value=shortId;
       shortId++;
       urlDataBase[value]=url 
       result={"original_url":url,"short_url":value}
       let index=url.indexOf(":")
       for(let i=index+1;i<6;i++){
           if(url[i]!=='/'){
             result={error:"invalid url"};
           }}
     }catch(error){
       result={error:"invalid url"};
     }
      resp.json({...result})
});
// get the url by short name and redirect if it exists
app.get("/api/shorturl/:shorturl",(req,resp)=>{
    const id=parseInt(req.params.shorturl);
    resp.redirect(urlDataBase[id])
})


app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port);
