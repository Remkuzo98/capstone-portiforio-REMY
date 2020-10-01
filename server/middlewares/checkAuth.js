import jwt from 'jsonwebtoken';



const autho = (req, res, next) => {
   try {
      const  token  = req.headers.authorization;
      const decoded = jwt.verify(token, process.env.jwtKey)
      if(decoded){
          next();
      }else {
          return res.status(404).send({
            message:"authethication failed",

            })
      }
   } catch (error) {
    return res.status(500).send({
        error:error.message
    })
   }
}
export default autho;