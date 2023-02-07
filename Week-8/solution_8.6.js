/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = [];
  getPaths(0, graph, [0], result);
  return result;
};

var getPaths = function (start, graph, paths, result) {
  graph[start].forEach((node) => {
    const newPaths = [...paths, node];
    if (node === graph.length - 1) {
      result.push(newPaths);
      return;
    }
    getPaths(node, graph, newPaths, result);
  });
};

// https://leetcode.com/problems/all-paths-from-source-to-target/submissions/893476728/
// tc : o(n)
// sp comp: o(n)
