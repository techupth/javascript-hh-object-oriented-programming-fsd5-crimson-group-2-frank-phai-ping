//  Start coding here
class User{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class postlist{
    constructor(){
        this.posts = [];
    }
    addPost(post){
        this.post.push({
            id: this.posts.length + 1,
            title: post.title,
            content: post.content,
            comment: post.comments,
        });
    }
    sharedPost(postTitle){
        console.log(`You've shared post ${this.posts[postTitle-1].title} to your friend.`)
    }
}

class Post{
    constructor(id, title, content, comments){
        this.id = id;
        this.title = title;
        this.content = content;
        this.comments = [];
    }
    addComment(textComment){
        this.comments.push(textComment);
    }
}

class Comment{
    constructor(id, content, createBy, like){
        this.id = id;
        this.content = content;
        this.createBy = createBy;
        this.like = 0;
    }
    addLike(){
        this.like = this.like + 1;
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
    send(comment, post){
        console.log(`Notification: ${comment.createBy.name} has just commented on this post—${post.title}`)
    }
}