const Pool = require('pg').Pool
const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'api',
    password: '#C4tf1sh!',
    port: 5432
})

let connection = {}

let check_pool = async () => {
    try {
        await pool.connect()
    } catch (err) {
        console.log('Não foi possível conectar ao banco de dados!')
        throw err
    }
    console.log('--Banco de dados Fake Project carregado!')
}

connection.insere_novo_contato = function (data) {
    return pool.query('INSERT INTO tb_usuario ()')
}

module.exports = connection;