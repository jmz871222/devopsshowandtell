# API to Send Email using NodeJS and Nodemailer

**Key Features:**

(1) After deploying the docker, you can call the sending email api to send email to any target address.

(2) The sender email box is Gmail "devopsbatch16jiangmingzhi@gmail.com", which is newly set up for sending purpose.

(3) You can register a new Gmail and replace the email address and password in the code for your own. 

(4) If you are using your own Gmail, please switch on "Less Secure Apps" for the Gmail account. You can find more here: https://support.google.com/accounts/answer/6010255

**Steps:**

(1) Docker run the sending email API:

**docker run -d -p 8080:8080 jmz871222/emailapi:latest**

(2) call api by typing params in url to send email to target email box

**http://localhost:8080/sendemail?email={email_address}&subject={email_subject}&text={email_text}**
