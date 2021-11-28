
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {

    const allPathsFromSourceToTarget = [];
    const target = graph.length - 1;
    const path = [0];
    searchAllPathsToTarget(0, target, graph, path, allPathsFromSourceToTarget);

    return allPathsFromSourceToTarget;
};

/*
 * @param {number} current
 * @param {number} target
 * @param {number[][]} graph
 * @param {number[]} path
 * @param {number[][]} allPathsFromSourceToTarget
 */
function searchAllPathsToTarget(current, target, graph, path, allPathsFromSourceToTarget) {

    if (current === target) {
        allPathsFromSourceToTarget.push([...path]);
        return;
    }

    for (let i = 0; i < graph[current].length; i++) {
        let node = graph[current][i];
        path.push(node);
        searchAllPathsToTarget(node, target, graph, path, allPathsFromSourceToTarget);
        path.splice(path.length - 1, 1);
    }
}
