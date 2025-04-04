# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

On each call of the dfSearch function, all of the edges of the startNode will be 
added to the toCheck array and then processed. Only edges that go to vertices 
that haven't been visited yet will be passed into a new recursive call. As a result, 
each accessible vertex will be processed once and each edge will be processed once. 
In the worst case, the whole graph will be traversed. Therefore the asymptotic complexity
is $\Theta(|V| + |E|)$. 

## Bonus

Implement and analyze breadth-first search.

At the beginning of the breadth-first search there is a loop that creates empty arrays 
to hold the path to each node. This will not end up being significant as there will be 
higher order terms in the rest of the analysis. Similarly to depth-first search, the 
function will iterate through each accessible vertex and will go through each outgoing
edge of each vertex. However, unlike depth-first search, it also updates the paths for 
each edge using the spread operator. In the worst case, the length of the path will 
increase by one for each time, ending at the number of vertices on the last iteration 
of the while loop. Since this summation is in terms of the number of vertices (linear), 
our final asymptotic complexity will be $\Theta(|V|^2 + |E|)$. This could probably be 
improved, but my method of generating paths for each vertex was probably what led to this 
inefficiency. 

## Additional Help

I wasn't completely sure if copying with the spread operator had a linear complexity or not. I found 
an answer on https://stackoverflow.com/questions/57032373/whats-the-time-complexity-of-javascript-spread-syntax-in-arrays

"I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice."
