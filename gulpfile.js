var gulp = require("gulp");

gulp.task('default', defaultTask);

function defaultTask(done) {
    console.log("passed!");
    done();
}
defaultTask.description = "sanity test";