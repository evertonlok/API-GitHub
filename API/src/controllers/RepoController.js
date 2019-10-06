const axios=require('axios')
module.exports=
{
    async index(req,res)
    {
        const nome=req.params.nome
        const response=await axios.get(`https://api.github.com/users/${nome}/repos`)
        return res.json(response.data)
    },
    async detalhe(req,res)
    {
        const user=req.params.user
        const name=req.params.name
        const response=await axios.get(`https://api.github.com/repos/${user}/${name}`)

        return res.json(response.data)
    }
}