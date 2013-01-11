module.exports = function (grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',

		// Linted Directories.
		lint: {
			all: [
				'public/js/src/*.js',
				'public/js/src/controller/*.js',
				'public/js/src/directive/*.js',
				'public/js/src/filter/*.js',
				'public/js/src/resource/*.js',
				'public/js/src/service/*.js'
			]
		},

		// Linting options.
		jshint: {
			options: {
				nomen: false
			},
			global: {
				define: true,
				window: true,
				document: true
			}
		},

		// Compile less files into css.
		less: {
			development: {
				files: {
					'public/css/app.css': 'public/less/app.less'
				}
			},
			production: {
				files: {
					'target/gallery-ui/css/app.css': 'public/less/app.less'
				},
				options: {
					compress: true
				}
			}
		},

		// Optimize and compress JavaScript source files.
		requirejs: {
			compile: {
				options: {
					baseUrl: './public/js/src',
					mainConfigFile: './public/js/src/main.js',
					out: './target/gallery-ui/js/main.js',
					name: 'main'
				}
			}
		},

		// Compile index.html into 'target' build directory.
		html: {
			production: {
				src: 'views/*.html',
				dest: 'target/gallery-ui/FILE.html',
				options: {
					title: 'Angular with Require || Gallery',
					url: 'docs',
					setAccount: 'NA',
					setSiteId: 'NA',
					layout: 'views/layout/layout.html',
					dev: false,
					docs: true,
					app: false,
					website: false,
					paths: {
						partials: 'views/partials/*.html'
					}
				}
			}
		},

		// Copy additional artifacts into 'target' build directory.
		copy: {
			dist: {
				files: {
					'target/gallery-ui/img/': 'public/img/**',
					//'target/gallery-ui/i18n/': 'public/i18n/**',
					'target/gallery-ui/template/': 'public/template/**',
					'target/gallery-ui/font/': 'public/less/lib/font-awesome/font/**',
					'target/gallery-ui/data/': 'public/data/**'
				}
			}
		}
	});

	// Load plugins/tasks.
	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadTasks('tasks');

	// Register tasks.
	grunt.registerTask('default', 'lint less requirejs html copy');
}