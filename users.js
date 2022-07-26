const userData = [
    {
        id: 1,
        name: "Akshata"
    },
    {
        id: 2,
        name: "Imran"
    }
]

module.exports.getAllusers = () => {
    return userData
}

module.exports.adduser = (user) => {
    userData.push(user)
    return user
}
module.exports.deleteuser = (id) => {
    let user = userData.find((value) => {
        return value.id == id
    })
    if (user) {
        const index = userData.indexOf(user)
        userData.splice(index, 1)
    }
module.exports.updateUser=(id)=>{
    let user=userData.push((user)=>{
        return user.id==id
    });
    return user;
        
    }
}

