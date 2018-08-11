// Given an absolute path for a file (Unix-style), simplify it.
//
// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"
//
// Corner Cases:
//
// Did you consider the case where path = "/../"?
// In this case, you should return "/".
// Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
// In this case, you should ignore redundant slashes and return "/home/foo".
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const pathArr = path.split("/");
  const paths = [];

  for (let i = 0; i < pathArr.length; i++) {
    let s = pathArr[i];
    if (s === "..") {
      if (paths.length > 0) {
        paths.pop();
      }
    } else if (s !== "" && s !== ".") {
      paths.push(s);
    }
  }

  let result = "/";
  for (let i = 0; i < paths.length; i++) {
    result = result + paths[i] + "/";
  }

  if (result.length > 1) {
    result = result.slice(0, result.length - 1);
  }

  return result;
};
