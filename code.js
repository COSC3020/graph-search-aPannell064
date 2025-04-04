function depthFirstSearch(graph, startNode, targetNode) {
    var visited = new Array(graph.length).fill(false);
    return dfSearch(graph, startNode, targetNode, visited);
}

function dfSearch(graph, startNode, targetNode, visited) {
    if (startNode == targetNode) {return [startNode];}
    visited[startNode] = true;
    var toCheck = [...graph[startNode]];
    var next;
    var path;

    //For each accessible vertex
    while(toCheck.length) {
        next = toCheck.shift();
        
        //Recursively process next unless visited
        if(!visited[next]) {
            path = dfSearch(graph, next, targetNode, visited);

            //Add node if to path if it exists
            if(path.length) {
                path.unshift(startNode);
                return path;
            }
        }   
    }
    return [];
}

function breadthFirstSearch(graph, startNode, targetNode) {
    var marked = new Array(graph.length).fill(false);
    marked[startNode] = true;
    paths = []
    for(var i = 0; i < graph.length; i++) {
        paths.push([])
    }
    var toCheck = [startNode];

    //For each accessible vertex
    while(toCheck.length) {
        current = toCheck.shift();
        paths[current].push(current)
        if(current == targetNode) {return paths[current];}

        // For each edge
        for(var i = 0; i < graph[current].length; i++) {
            //Enqueue and mark if not already marked
            if(!marked[graph[current][i]]) {
                toCheck.push(graph[current][i]);
                marked[graph[current][i]] = true;

                //Copy current path into new path
                paths[graph[current][i]] = [...paths[current]];
            }    
        }
    }
    return [];
}