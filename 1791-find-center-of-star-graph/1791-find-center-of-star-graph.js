/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const seen = {}

    for (const edge of edges) {
        const node1 = edge[0]
        const node2 = edge[1]
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