class Notification {
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`)
    }
 }

class EmailNotification extends Notification{ 
    constructor(notificationId, createdTime, content, receiver){
        super(notificationId, createdTime, content, receiver);
    }
}

class SMSNotification extends Notification{
    constructor(notificationId, createdTime, content, receiver){
        super(notificationId, createdTime, content, receiver)
    }
 }

 let frankEmail = new EmailNotification("1239", "09.30", "What's up bro!!", "frank@gmail.com")
 frankEmail.send();

 let frankNumber = new SMSNotification("1239", "10.30", "Do you copy?", "093-419xxx")
 frankNumber.send()