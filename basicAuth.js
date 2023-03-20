function authUser(req, res, next) {
    if(req.user == null){
        res.status(403)
        return res.send("u need to sing in")
    }
    next()
}

function authRole(role) {
    return (req, res, next) => {
        if(req.user.role == role){
            next()
        }else{
            res.status(401)
            return res.send("not allowed")
        }
    }
} 

module.exports = {
    authUser,
    authRole
}