class Node {
    constructor() {
        this.children = new Map(); // char -> Node
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (!node.children.has(c)) {
                node.children.set(c, new Node());
            }
            node = node.children.get(c);
        }
        node.isWord = true;
    }

    search(word) {
        let node = this.root;
        for (let c of word) {
            if (!node.children.has(c)) {
                return false;
            }
            node = node.children.get(c);
        }
        return node.isWord;
    }

    startsWith(word) {
        let node = this.root;
        for (let c of word) {
            if (!node.children.has(c)) {
                return false;
            }
            node = node.children.get(c);
        }
        return true;
    }
}

// var Trie = function() {
    
// };

// /** 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
    
// };

// /** 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
    
// };

// /** 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
    
// };

// /** 
//  * Your Trie object will be instantiated and called as such:
//  * var obj = new Trie()
//  * obj.insert(word)
//  * var param_2 = obj.search(word)
//  * var param_3 = obj.startsWith(prefix)
//  */