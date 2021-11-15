# Lab 8 - Starter
Bin Ni
1. Where would you fit your automated tests in your Recipe project development pipeline?
Answer: Within a Github action that runs whenever code is pushed

2. Would you use an end to end test to check if a function is returning the correct output?
Answer: No

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
Answer: No. Since the message receving required the internet connection and then the test will not test the result is wrong whether because of the internet connection, e.g. the transaction of the message or because of the application

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Answer: Yes. Since length of the writing message is easy to get and no internet involved.