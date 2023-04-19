/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if (prerequisites.length === 0) {
        return true;
    }
    const indegree = [];
    const graph = [];
    for (let i = 0; i < numCourses; i++) {
        indegree[i] = 0;
        graph[i] = [];
    }

    for (let i = 0; i < prerequisites.length; i++) {
        const [course, req] = prerequisites[i];
        indegree[course] +=1;
        graph[req].push(course); 
    }

    let queue = [];
    
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let req;
    while (queue.length > 0) {
        [req, ...queue] = queue;
        for (let i = 0; i < graph[req].length; i++) {
            indegree[graph[req][i]] = indegree[graph[req][i]] - 1;
            if (indegree[graph[req][i]] === 0) {
                queue.push(graph[req][i]);
            }
        }
    }

    return indegree.every(x => x === 0);
};
