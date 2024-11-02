//imports
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/students.route.js'
import {connectdb} from './config/db.js'

const app = express();

app.use(express.json())
app.use('/',routes);




app.listen(3000, ()=>{
    connectdb();
    console.log('Server is running on port 3000');  // Log the server is running message on the console.  This is a simple example. In a real-world application, you might want to use a logging library like winston or a service like Heroku for logging.  You might also want to use environment variables for sensitive data like your database connection string.  For example, you could use dotenv to load environment variables from a .env file.  However,
})
;
    
   