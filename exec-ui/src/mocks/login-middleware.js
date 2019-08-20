module.exports = (req, res, next) => {
    if (req.method == 'POST' && req.path == '/api/login') {
        switch (req.body.name) {
            case 'admin':
                req.body.password === 'admin' ?
                    res.status(200).json({
                        name: 'admin',
                        surename: 'admin',
                        role: 1,
                        token: 'xxx'
                    }) :
                    res.status(401).json({
                        message: 'The password is incorrect. Try again.'
                    });
                break;
            case 'user':
                req.body.password === 'user' ?
                    res.status(200).json({
                        name: 'user',
                        surename: 'user',
                        role: 2,
                        token: 'xxx'
                    }) :
                    res.status(401).json({
                        message: 'The password is incorrect. Try again.'
                    });
                break;
            default:
                res.status(401).json({
                    message: 'The name is incorrect. Try again.'
                });
                break;
        }
    } else {
        next()
    }
}