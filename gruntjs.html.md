```
GRUNT JS
```

# O Grunt JS é um poderoso task runner (automatizador de tarefas), que roda no terminal, e é gerenciado pelo NPM, o gerenciador de pacotes para Node. Podemos fazer várias tarefas interessantes pelo grunt, como comprimir, concatenar, fazer deploy, entre outras.

```
Instalação
```

1 - instalar o nodeJS.  *> [http://nodejs.org/](http://nodejs.org/)* 

2 - Depois de instalar o nodeJS, Abra o cmd/terminal e digite: 
	
	``` html
	 npm install -g grunt-cli
	```

3 - no cmd/terminal dentro no diretorio da pasta do projeto digitar: 

	npm install grunt --save-dev    // surgirá a pasta node modules dentro da pasta do seu projeto

	
4 - instale os plugins crie os arquivos Gruntfile.js e packge.json e os configure.

	// OBS: Existe exemplo dos arquivos Gruntfile.js e package.json na pasta "Exemplos".


5 - instale os plugins via terminal, como por exemplo: 

	npm install matchdep --save-dev
	npm install grunt-contrib-watch --save-dev
	npm install grunt-contrib-compass --save-dev
	npm install grunt-contrib-uglify --save-dev
	npm install grunt-ftp-deploy --save-dev

6 - adicione os plugins no Gruntfile.js

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-ftp-deploy');

7 - registre a(s) tarefa no Gruntfile.js

	grunt.registerTask( 'default', [ 'watch' ] );
	grunt.registerTask( 'deploy', [ 'ftp-deploy' ] );

8 - por fim execute as tarefas no cmd/terminal, por exemplo:

	grunt (executar as tarefas que estão com o nome default).
	grunt deploy (executar as tarefas que estão com o nome deploy).

	
	OBS: Se for usar tranferência FTP, você terá que criar um arquivo nomeado ".ftppass" colocando o nome e senha do host, por exemplo:

{
	"key1": {
		"username": "login ftp",
		"password": "senha ftp"
	}
}