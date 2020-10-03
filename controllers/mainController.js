const login = async(req, res, next)=>{
    // const {token} = req.body;

}

const hello = async(req, res, next)=>{
    res.json({result : "hello!"});
}

module.exports = {
    hello,
    login
}