module.exports = function (grunt) {
	grunt.initConfig({

		// concatenar o css

	    cssmin: {
	      compress: {
	        files: {
	        	
	          // 'web/css/main.css': ['projeto/css/style.css', 'projeto/css/responsive.css']
	          'web/css/style.css': ['projeto/css/style.css'],
	          'web/css/responsive.css': ['projeto/css/responsive.css']
	        }
	      }
	    },

	    // minificar o html

		htmlmin: {
	      options: {
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      compile: {
	        files: {
	          'web/index.html': ['projeto/index.html'],
	          'web/sobre.html': ['projeto/sobre.html'],
	          'web/projetos.html': ['projeto/projetos.html']
	        }
	      }
	    },
	   
	    // minificar o javascript

		uglify: {

			minificarJs: {
				files: {
					'web/js/validacao.js': ['projeto/js/validacao.js'],
					'web/js/index.js': ['projeto/js/validacao.js'],
					'web/js/sobre.js': ['projeto/js/sobre.js'],
					'web/js/projetos.js': ['projeto/js/projetos.js']
				}
			}
		},
		

		// FTP deployment
		'ftp-deploy': {
			build: {
				auth: {
					host: 'ftp.seudominio.com',
					port: 21,
					authKey: 'key1'
				},
				src: 'web/', // pasta onde estão os arquivos onde serão enviados ao servidor
				dest: 'gustavo/destino/',  // destino
				exclusions: [
					'../**/.DS_Store',
					'../**/Thumbs.db',
					'../.git',
					'../.gitignore',
					'../README.md',
					'../src',
					'../assets'
				]
			}
		}

	});

	
	//adicionando plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-ftp-deploy');


	// registrando tarefas
	grunt.registerTask('default', ['uglify','htmlmin','cssmin']);

	// deploy
	grunt.registerTask( 'deploy', [ 'ftp-deploy' ] );
};