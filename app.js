//import { Twilio } from "twilio";

require('dotenv').config()

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Your appointment is coming up on July 21 at 3PM', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+6592287686' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();