/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const seen = {}

    for (const [node1, node2] of edges) {
        if (seen[node1]) {
            return node1
        }
        if (seen[node2]) {
            return node2
        }
        seen[node1] = true
        seen[node2] = true
    }
};