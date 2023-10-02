import express from 'express'
const main =express()
main.listen(3000,()=>{
    console.log(`Listening on  http://localhost:3000`);
})