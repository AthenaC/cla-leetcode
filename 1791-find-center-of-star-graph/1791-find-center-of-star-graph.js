/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const graph = {};

    for (const [n1, n2] of edges) {
        graph[n1] ??= []
        graph[n2] ??= []

        graph[n1].push(n2)
        graph[n2].push(n1)
    }

    for (const [key, val] of Object.entries(graph)) {
        if (val.length > 1) {
            return +key;
        }
    }
};