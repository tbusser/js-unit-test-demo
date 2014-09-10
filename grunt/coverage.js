module.exports = {
  // This is the property we use for the report task to get its data from. The
  // coverage data which will be stored in this property comes from the modified
  // grunt-mocha task
  coverage: null,

  // Configure the instrument task. It will tell Istanbul which files to prepare
  // 1: The files which Istanbul should not cover, e.g.: third party libraries.
  //    These files will be copied as-is to the destination folder.
  // 2: The file mask for the files to cover.
  // 3: The folder where to look for the files.
  // 4: The folder where the instrumented files and ignored files should be
  //    copied to. Don't make this the same as the folder at [3] or your
  //    original files will be overwritten
   instrument: {
    ignore: [],               /* [1] */
    files: [
      {
        src: '**/*.js',       /* [2] */
        expand: true,
        cwd: 'lib',           /* [3] */
        dest: 'test/src'      /* [4] */
      }
    ]
  },

  // Configure the report task
  // 5: Specify the formats to use for the report. 'html' will result in a HTML
  //    file which links to the reports for the instrumented files. This will
  //    allow you to see which branches weren't executed etc. The 'text-summary'
  //    reporter will write a small stats table to the terminal giving some
  //    immediate visual feedback after running the Grunt task.
  // 6: This is the folder where the reports will be written to. Each report
  //    format, in our case just HTML, will be written to a subfolder named
  //    after the format.
  report: {
    reports: ['html', 'text-summary'],    /* [5] */
    dest: 'coverage'                      /* [6] */
  }
};
