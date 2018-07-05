/**
 * Definition for a point.
 * class Point {
 *     int x;
 *     int y;
 *     Point() { x = 0; y = 0; }
 *     Point(int a, int b) { x = a; y = b; }
 * }
 */

public class Solution {
    /**
     * @param grid: a chessboard included 0 (false) and 1 (true)
     * @param source: a point
     * @param destination: a point
     * @return: the shortest path
     */
    public int shortestPath(boolean[][] grid, Point source, Point destination) {
        // write your code here
        if (grid == null || grid.length == 0) {
            return -1;
        }
        int[] goX = {2, 1, 2, 1, -2, -1, -2, -1};
        int[] goY = {1, 2, -1, -2, 1, 2, -1, -2};

        if (!inBound(grid, source) || !inBound(grid, destination)) {
            return -1;
        }

        Queue<Point> queue = new LinkedList<>();
        queue.offer(source);

        int count = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                Point pt = queue.poll();
                if (pt.x == destination.x && pt.y == destination.y) {
                    return count;
                }
                for (int j = 0; j < 8; j++) {
                    Point newPt = new Point(pt.x + goX[j], pt.y + goY[j]);

                    if (inBound(grid, newPt) && !grid[newPt.x][newPt.y]) {
                        queue.offer(newPt);
                        grid[newPt.x][newPt.y] = true;
                    }
                }
            }
            count++;
        }
        return -1;
    }
    public boolean inBound(boolean[][] grid, Point pt) {
        return pt.x >= 0 && pt.x < grid.length && pt.y >= 0 && pt.y < grid[0].length;
    }
}
