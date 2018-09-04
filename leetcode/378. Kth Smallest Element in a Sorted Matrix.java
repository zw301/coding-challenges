class Pair {
  public int x;
  public int y;
  public int val;
  public Pair(int x, int y, int val) {
    this.x = x;
    this.y = y;
    this.val = val;
  }
}

class PairComparator implements Comparator<Pair> {
  public int compare(Pair a, Pair b) {
    return a.val - b.val;
  }
}

class Solution {
    public int kthSmallest(int[][] matrix, int k) {
      int[] dx = {0, 1};
      int[] dy = {1, 0};

      int n = matrix.length;
      int m = matrix[0].length;

      boolean[][] hash = new boolean[n][m];
      PriorityQueue<Pair> minHeap = new PriorityQueue<Pair>(new PairComparator());
      minHeap.offer(new Pair(0, 0, matrix[0][0]));

      for (int i = 0; i < k - 1; i++) {
        Pair curr = minHeap.poll();
        for (int j = 0; j < 2; j++) {
          int nextX = curr.x + dx[j];
          int nextY = curr.y + dy[j];
          Pair nextPair = new Pair(nextX, nextY, 0);
          if (nextX < n && nextY < m && !hash[nextX][nextY]) {
            hash[nextX][nextY] = true;
            nextPair.val = matrix[nextX][nextY];
            minHeap.offer(nextPair);
          }
        }
      }
      return minHeap.peek().val;
    }
}
