const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tasks = require('./routes/api/tasks')



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false }))

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


const mangodb = require('./keys').mangoURI

mongoose.connect(mangodb )
 .then(() => console.log('Connected to MangoDb'))
 .catch(err => console.log(err));

 const port = process.env.PORT || 5000

 if (process.env.NODE_ENV === 'production'){
     app.use(express.static('client/build'));
 }




 app.use('/api/tasks' , tasks)

app.listen(port , () => console.log(`Listening at port ${port}`));