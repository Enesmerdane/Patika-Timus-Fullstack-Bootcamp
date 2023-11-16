let posts = [
    { postId: 0, text: "Hello there!" },
    { postId: 1, text: "General Kenobi?!" },
];

const printList = (list) => {
    console.log("\nPrinting list:");
    list.forEach((val) => {
        console.log(val.text);
    });
};

const addPost = async (postText) => {
    return new Promise((resolve, reject) => {
        try {
            let newPost = { postId: postText.length, text: postText };
            posts.push(newPost);
            resolve(posts);
        } catch (err) {
            reject(err);
        }
    });
};

printList(posts);

addPost("hey")
    .then((val) => {
        printList(val);
    })
    .catch((err) => {
        console.log(err);
    });
