const customExpress = require('./config/customExpress')
const conexao = require('./infraestructura/conexao')
const Tabelas = require('./infraestructura/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        Tabelas.init(conexao)
        
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})



