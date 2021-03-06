module.exports.index = function(application, req, res){
	res.render('index', {validacao : {}, usuario : {}});
}

module.exports.autenticar = function(application, req, res){
	
	var dadosForm = req.body;

	req.assert('usuario','Usuário ão pode ser vazio').notEmpty();
	req.assert('senha','Senha não pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('index', {validacao : erros});
		return;
	}

	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.autenticar(dadosForm, req, res);

	//res.send('Pronto para criar uma sessão');

}