const express=require('express')
const router=express.Router()
const UserController=require('./controllers/UserController')
const RepoController=require('./controllers/RepoController')
router.get('/',(req,res)=>
{
    res.send('Foii na porta')
})
router.get('/perfil/:nome',UserController.index)
router.get('/repos/:nome',RepoController.index)
router.get('/detail/:user/:name',RepoController.detalhe)
module.exports=router