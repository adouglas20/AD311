function checkAccess(loggedIn) {
    let accessLevel; // used let because accesslevel gets reassigned
    let userRole; // used let because userRole gets reassigned
    if (loggedIn) {
        const message = "User is logged in."; //used const because message is never reassigned
        console.log(message);
        if (userRole === "admin") {
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else {
        const message = "User not logged in."; //used const because message is never reassigned
        console.log(message);
        accessLevel = "none";
    }
    return accessLevel;
}

for (let i = 0; i < 3; i++) { //used let because it has to increment for loop to function
    console.log("Attempt", i);
    const loggedIn = Math.random() >= 0.5; // used const because loggedIn is never reassigned/
    checkAccess(loggedIn);
    console.log("Access Level:", checkAccess(loggedIn));
}