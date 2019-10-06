const axios=require('axios')
module.exports=
{
    async index(req,res)
    {
        const nome=req.params.nome
        const response=await axios.get(`https://api.github.com/users/${nome}`)
        return res.json(response.data)
    }
}