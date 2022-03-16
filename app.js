//import { Twilio } from "twilio";

const accountSid = 'AC838300f7fd36d2aa3d6093259a6b6508'; 
const authToken = '5b7739bdde71611a7a14cae5a3227e6f'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Your appointment is coming up on July 21 at 3PM', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+6592287686' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();