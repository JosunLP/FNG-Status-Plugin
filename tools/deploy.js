var fs = require('fs');
var path = require('path');
var DEPLOY_ENTRY = "./public";
var DEPLOY_TARGET = "./fng_status_plugin";

function deleteFolderRecursive(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file) {
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

function mkdirSync(path) {
  try {
    fs.mkdirSync(path);
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}

function copyFiles(source, target) {
  var files = fs.readdirSync(source);
  files.forEach(function(file) {
    var sourceFile = path.join(source, file);
    var targetFile = path.join(target, file);
    var stat = fs.lstatSync(sourceFile);
    if (stat.isDirectory()) {
      mkdirSync(targetFile);
      copyFiles(sourceFile, targetFile);
    } else {
      fs.writeFileSync(targetFile, fs.readFileSync(sourceFile));
    }
  });
}

deleteFolderRecursive(DEPLOY_TARGET);
mkdirSync(DEPLOY_TARGET);
copyFiles(DEPLOY_ENTRY, DEPLOY_TARGET);

console.log("Deployed to " + DEPLOY_TARGET);