/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const seen = new Set()

    for (const [node1, node2] of edges) {
        if (seen.has(node1)) {
            return node1
        }
        if (seen.has(node2)) {
            return node2
        }
        seen.add(node1)
        seen.add(node2)
    }
};