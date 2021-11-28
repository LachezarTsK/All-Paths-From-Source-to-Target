
#include <vector>
using namespace std;

class Solution {
public:

	vector<vector<int>> allPathsFromSourceToTarget;
	int target;

	vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {

		target = graph.size() - 1;
		vector<int> path = {};
		path.push_back(0);
		searchAllPathsToTarget(0, path, graph);

		return allPathsFromSourceToTarget;
	}

	void searchAllPathsToTarget(int current, vector<int>& path, vector<vector<int>>& graph) {

		if (current == target) {
			allPathsFromSourceToTarget.push_back(vector<int>(path));
			return;
		}

		for (int i = 0; i < graph[current].size(); i++) {
			int node = graph[current][i];
			path.push_back(node);
			searchAllPathsToTarget(node, path, graph);
			path.pop_back();
		}

	}
};
