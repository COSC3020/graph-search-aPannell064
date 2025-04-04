const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//DFS Tests
//Graph with one node
assert.deepStrictEqual(depthFirstSearch([[]], 0, 0), [0], "DFS: Failed on [[]]");

//Very simple graph
assert.deepStrictEqual(depthFirstSearch([[1],[]], 0, 1), [0,1], "DFS: Failed on [[1],[]]");

//Graph based on slide 28 (It shouldn't necessarily follow the shortest path)
assert.deepStrictEqual(depthFirstSearch([[1,2,5],[4],[3,5],[4],[],[6],[]], 0, 6), [0,2,5,6], "DFS: Failed on example from slides");

//Same graph with different startNode
assert.deepStrictEqual(depthFirstSearch([[1,2,5],[4],[3,5],[4],[],[6],[]], 5, 6), [5,6], "DFS: Failed when startNode isn't the first one");

//Same graph with nonexistent targetNode
assert.deepStrictEqual(depthFirstSearch([[1,2,5],[4],[3,5],[4],[],[6],[]], 0, 7), [], "DFS: Failed when path doesn't exist");

//Same graph with a cycle added
assert.deepStrictEqual(depthFirstSearch([[1,2,5],[4],[3,5],[4],[2],[6],[]], 0, 6), [0,1,4,2,5,6], "DFS: Failed when a cycle exists");


//BFS Tests
//Graph with one node
assert.deepStrictEqual(breadthFirstSearch([[]], 0, 0), [0], "BFS: Failed on [[]]");

//Very simple graph
assert.deepStrictEqual(breadthFirstSearch([[1],[]], 0, 1), [0,1], "BFS: Failed on [[1],[]]");

//Graph based on slide 28 (It should follow the shortest path)
assert.deepStrictEqual(breadthFirstSearch([[1,2,5],[4],[3,5],[4],[],[6],[]], 0, 6), [0,5,6], "BFS: Failed on example from slides");

//Same graph with different startNode
assert.deepStrictEqual(breadthFirstSearch([[1,2,5],[4],[3,5],[4],[],[6],[]], 5, 6), [5,6], "BFS: Failed when startNode isn't the first one");

//Same graph with nonexistent targetNode
assert.deepStrictEqual(breadthFirstSearch([[1,2,5],[4],[3,5],[4],[],[6],[]], 0, 7), [], "BFS: Failed when path doesn't exist");

//Same graph with a cycle added
assert.deepStrictEqual(breadthFirstSearch([[1,2,5],[4],[3,5],[4],[2],[6],[]], 0, 6), [0,5,6], "BFS: Failed when a cycle exists");