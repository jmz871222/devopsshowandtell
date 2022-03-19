# Sending Email API with NodeJS (using Nodemailer)

**Key Features:**

(1) After deploying the docker container "emailapi", you can call the sending email api to send a email to any email address.

(2) Currently, the sender email box is a new Gmail "devopsbatch16jiangmingzhi@gmail.com", which is set up for sending purpose.

(3) You can register a new Gmail for your own. 

**Steps:**

(1) Docker run the sending email API:

**docker run -d -p 8080:8080 jmz871222/emailapi:latest**

(2) call api by typing params in url to send email to target email box

**http://localhost:8080/sendemail?email={email_address}&subject={email_subject}&text={email_text}**
