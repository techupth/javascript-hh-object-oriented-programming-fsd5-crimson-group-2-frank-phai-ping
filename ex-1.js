class EmailNotification {
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(email){
        console.log(`Notification has been sent to ${email}`)
    }
 }

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send(phoneNumber){
        console.log(`Notification has been sent to ${phoneNumber}`)
    }
 }

 let frankEmail = new EmailNotification("1239", "09.30", "What's up bro!!", "frank@gmail.com")
 frankEmail.send(frankEmail.receiver);

 let frankNumber = new SMSNotification("1239", "10.30", "Do you copy?", "093419xxx")
 frankNumber.send(frankNumber.phoneNumber)