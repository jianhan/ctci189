const obj = {
    message: "Hello",
    getMessage() {
        console.log(this.message);
    },
};

// Broken
setTimeout(obj.getMessage.bind(obj), 0);