class DynamicProgramming

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    @frog_cache = { 1 => [[1]], 2 => [[1,1],[2]], 3 => [[1, 1, 1], [1, 2], [2, 1],[3]] }
  end

  def blair_nums(n)
    return @blair_cache[n] unless @blair_cache[n].nil?

    ans = blair_nums(n - 1) + blair_nums(n - 2) + (n - 1) * 2 - 1
    @blair_cache[n] = ans
    return ans
  end

  def frog_hops_bottom_up(n)
    frog_cache = frog_cache_builder(n)
    frog_cache[n]

  end

  def frog_cache_builder(n)
    frog_cache = {
      1 => [[1]],
      2 => [[1, 1], [2]],
      3 => [[1,1,1], [1,2], [2,1], [3]]
    }

    return frog_cache if n <= 3

    (4..n).each do |i|
      step1 = frog_cache[i - 1].map{ |subarr| subarr.dup.push(1) }
      step2 = frog_cache[i - 2].map{ |subarr| subarr.dup.push(2) }
      step3 = frog_cache[i - 3].map{ |subarr| subarr.dup.push(3) }

      frog_cache[i] = step1 + step2 + step3
    end

    frog_cache
  end

  def frog_hops_top_down(n)
    return @frog_cache[n] if @frog_cache[n]
    frog_hops_top_down_helper(n)
    @frog_cache[n]
  end

  def frog_hops_top_down_helper(n)
    return @frog_cache[n] if @frog_cache[n]
    step1 = frog_hops_top_down_helper(n - 1).map {|arr| arr + [1] }
    step2 = frog_hops_top_down_helper(n - 2).map {|arr| arr + [2] }
    step3 = frog_hops_top_down_helper(n - 3).map {|arr| arr + [3] }
    @frog_cache[n] = step1 + step2 + step3
  end

  def super_frog_hops(n, k)

  end

  def knapsack(weights, values, capacity)

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
