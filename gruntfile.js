
module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                manage: false,
               // compress:{
               //     drop_console:true
               // }
            },
            my_target:{
                files:{
                    'js/main.min.js':['js/input2.js']
                }
            }
        },
        cssmin:{
            my_target:{
                files:[{
                    expand:true,
                    cwd:'css/',
                    src:['*.css','!*.min.css'],
                    dest:'css/',
                    ext:'.min.css'
                }]
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                  
                    'html/index.min.html': 'html/index.html',     
                    'html/contact.min.html': 'html/contact.html',
                    'html/blog.min.html': 'html/blog.html',     
                    'html/service.min.html': 'html/service.html',
                    'html/about.min.html': 'html/about.html'
                }
            },
            dev: {                                       
                files: {
                    'html/index.main.min.html': 'html/index.html',     
                    'html/contact.main.min.html': 'html/contact.html',
                    'html/blog.main.min.html': 'html/blog.html',     
                    'html/service.main.min.html': 'html/service.html',
                    'html/about.main.min.html': 'html/about.html'
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};