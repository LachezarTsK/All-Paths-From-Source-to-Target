
import java.util.List;
import java.util.ArrayList;
import java.util.LinkedList;

public class Solution {

    List<List<Integer>> allPathsFromSourceToTarget;
    int[][] graph;
    int target;

    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {

        allPathsFromSourceToTarget = new ArrayList<>();
        this.graph = graph;
        target = graph.length - 1;
        LinkedList<Integer> path = new LinkedList<>();
        path.add(0);
        searchAllPathsToTarget(0, path);

        return allPathsFromSourceToTarget;
    }

    public void searchAllPathsToTarget(int current, LinkedList<Integer> path) {

        if (current == target) {
            allPathsFromSourceToTarget.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < graph[current].length; i++) {
            int node = graph[current][i];
            path.add(node);
            searchAllPathsToTarget(node, path);
            path.removeLast();
        }
    }
}
