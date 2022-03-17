# Sending Email API with NodeJS (Nodemailer)

(1) Docker run the sending email API:
docker run -d -p 8080:8080 jmz871222/emailapi:latest

(2) Using url to send email to target email box
curl -i http://localhost:8080/sendemail?email={email address}&subject={email subject}&text={email text}
