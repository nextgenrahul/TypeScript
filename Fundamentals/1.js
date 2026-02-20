function greet(user) {
    if (!user)
        return "Hello guest";
    return "Hello " + user.name.toUpperCase();
}
console.log(greet({ name: "Rahul" }));
console.log(greet(null));
