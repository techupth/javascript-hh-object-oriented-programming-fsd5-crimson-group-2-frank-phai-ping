//  Start coding here
class User{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class postlist{
    constructor(posts){
        this.posts = [];
    }
    addPost(post){
        this.post.push(post);
    }
    sharedPost(postTitle){
        console.log(`You've shared post ${postTitle}`)
    }
}

class Post{
    constructor(id, title, content, comment){
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }
    addComment(textComment){
        this.comment.push(textComment);
    }
}

class Comment{
    constructor(id, content, createBy, like){
        this.id = id;
        this.content = content;
        this.createBy = createBy;
        this.like = 0;
    }
    addLike(like){
        this.like += like;
    }
}

class Facebook{
    constructor(groupList, pageList){
        this.groupList = [];
        this.pageList = [];
    }
    addGroup(group){
        this.groupList.push(group);
    }
    addPage(page){
        this.pageList.push(page);
    }
}

class FacebookPage{
    constructor(name){
        this.name = name;
    }
}

class FacebookGroup{
    constructor(name){
        this.name = name;
    }
}

class Notification{
    constructor(id){
        this.id = id;
    }
    send(outPut){
        console.log(`Notification: ${Comment.this.createBy} has just commented on this post—${Post.this.title}`)
    }
}