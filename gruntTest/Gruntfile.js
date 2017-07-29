module.exports = function(grunt) {


    grunt.initConfig({
        jshint: {
            beforeconcat: ['js/comon.js', 'js/index.js'],
            afterconcat: ['uglify/index.min.js']
        },
        concat:{
            c01: {
                src: ['js/comon.js', 'js/index.js'],
                dest: 'concat/index.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! create by <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            u01: {
                src: ['js/comon.js', 'js/index.js'],
                dest: 'unlify/index.min.js'

            }
        },
        watch: {
            files: ['js/index.js','js/comon.js'],
            tasks: ['jshint','concat','uglify']
        },
        cssmin: {
            options : {
                compatibility : 'ie8', //设置兼容模式
                noAdvanced : true //取消高级特性
            },
            buildall: {//按原文件结构压缩css文件夹内所有JS文件
                files: [{
                    expand:true,
                    cwd:'css',//css目录下
                    src:'**/*.css',//所有css文件
                    dest: 'cssmin',//输出到此目录下
                    ext: '.min.css'
                }]
            }
        }  ,
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3 // png图片优化水平，3是默认值，取值区间0-7
                },
                files: [
                    {
                        expand: true, // 开启动态扩展
                        cwd: "images/", // 当前工作路径
                        src: ["**/*.{png,jpg,gif}"], // 要出处理的文件格式(images下的所有png,jpg,gif)
                        dest: "ima/" // 输出目录(直接覆盖原图)
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: '**/*.html',
                    dest: 'dist/'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //grunt.registerTask('default', ['jshint','concat','uglify','watch']);

    grunt.registerTask('default', ['cssmin']);

    ///grunt.registerTask('htmlmin', ['htmlmin']);

    //grunt.registerTask('imagemin', ['imagemin']);

};