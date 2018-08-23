const express = require('express')
const app = express()
app.get('/',(req,res)=>{
	res.send('HEY!')
})
app.listen(3007,()=>console.log('Server is on port 3007'))