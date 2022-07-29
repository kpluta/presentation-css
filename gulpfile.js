"use strict";

const gulp = require("gulp"),
  connect = require("gulp-connect");
const sass = require("gulp-sass")(require("sass"));
const open = require("gulp-open");
const os = require("os");

const PORT = 8080;

function buildStyles(done) {
  gulp
    .src("src/*.scss")
    .pipe(sass.sync({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("./app/css"))
    .pipe(connect.reload());

  done();
}

function buildHtml(done) {
  gulp.src("src/*.html").pipe(gulp.dest("./app")).pipe(connect.reload());

  done();
}

function buildScripts(done) {
  gulp.src("src/*.js").pipe(gulp.dest("./app")).pipe(connect.reload());

  done();
}

function reloadHtml(done) {
  gulp.src("./src/*.html").pipe(gulp.dest("./app")).pipe(connect.reload());
  done();
}

function reloadScripts(done) {
  gulp.src("./src/*.js").pipe(gulp.dest("./app")).pipe(connect.reload());
  done();
}

function watchFiles(done) {
  gulp.watch(["src/*.scss"], buildStyles);
  gulp.watch(["src/*.html"], reloadHtml);
  gulp.watch(["src/*.js"], reloadScripts);
  done();
}

function serve(done) {
  connect.server({
    root: "app",
    livereload: true,
    port: PORT,
  });

  const browser =
    os.platform() === "linux"
      ? "google-chrome"
      : os.platform() === "darwin"
      ? "google chrome"
      : os.platform() === "win32"
      ? "chrome"
      : "firefox";

  gulp.src(__filename).pipe(
    open({
      uri: `http://localhost:${PORT}`,
      app: browser,
    })
  );

  done();
}

exports.default = gulp.series(
  buildHtml,
  buildStyles,
  buildScripts,
  serve,
  watchFiles
);
