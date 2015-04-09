module.exports = (grunt) ->
    require("load-grunt-tasks")(grunt)

    grunt.registerTask "default", ["build", "concurrent"]

    grunt.registerTask "build", ["stylus:build", "jade:build"]

    grunt.initConfig
        concurrent:
            options:
                logConcurrentOutput: true
            dev:
                tasks: ["watch", "connect"]

        connect:
            dev:
                options:
                    port: 3000
                    hostname: "localhost"
                    #debug: true
                    #livereload: true
                    base: "dist/static"
                    keepalive: true

        watch:
            options:
                livereload: true

            grunt:
                files: ["Gruntfile.coffee"]

            stylus:
                files: ["src/styl/**/*.styl"]
                tasks: ["stylus:build"]

            jade:
                files: ["src/jade/**/*.jade"]
                tasks: ["jade:build"]


        # building stuff
        stylus:
            build:
                files:
                    "dist/static/css/main.css": ["src/styl/main.styl"]
        jade:
            build:
                files:
                    "dist/static/index.html": ["src/jade/index.jade"]
