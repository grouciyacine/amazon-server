import jwt from 'jsonwebtoken'

export const verify=(req,res,next)=>{
    try{
        const auth=req.headers.authorization;
        if(!auth) return res.status(401).json('auth not found')
        const token=auth.split(" ")[1]
        if(!token) return res.status(404).json('token not found')
        jwt.verify(token,process.env.JWT,(err,user)=>{
            if(err) return res.status(500).json('err user not exist')
            req.user=user
            next()
        })
    }catch(e){
        next(e);
    }
}