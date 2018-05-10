class DynamicProgramming

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    @frog_cache = { 1 => [[1]], 2 => [[1,1],[2]], 3 => [[1, 1, 1], [1, 2], [2, 1],[3]] }
    # @super_cache = { 0 => [], 1 => [[1]], 2 => [[1,1],[2]], 3 => [[1, 1, 1], [1, 2], [2, 1],[3]] }
    @super_cache = { 1 => [[1]] }
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

  # def frog_hops_top_down(n)
  #   return @frog_cache[n] if @frog_cache[n]
  #   step1 = frog_hops_top_down(n - 1).map {|arr| arr + [1] }
  #   step2 = frog_hops_top_down(n - 2).map {|arr| arr + [2] }
  #   step3 = frog_hops_top_down(n - 3).map {|arr| arr + [3] }
  #   @frog_cache[n] = step1 + step2 + step3
  #   @frog_cache[n]
  # end

  # super_frog_hops(num_stairs, max_stairs)
  def super_frog_hops(n, k)

    return [ [1] * n] if k == 1
    k = n if k > n

    return @super_cache[n] if @super_cache[n]

    (2..n).each do |stairs|
      steps = []
      (1..k).each do |max_hops|
        steps += @super_cache[stairs - max_hops].map {|arr| arr + [max_hops] } if @super_cache[stairs - max_hops]
        steps += [[max_hops]] if max_hops == stairs
      end
      @super_cache[stairs] = steps
    end
    @super_cache[n]
  end

  def knapsack(weights, values, capacity)
    table = Array.new(capacity + 1) {Array.new(weights.length) }
    return 0 if capacity == 0
    # table[0] = [0] + [weights[0]] * (table[0].length - 1)

    weights.each_with_index do |weight, item_idx|
      (0..capacity).each do |curr_capacity|

        above = item_idx > 0 ? table[curr_capacity][item_idx - 1] : 0

        if curr_capacity < weight
          table[curr_capacity][item_idx] = above
        else
          if item_idx > 0
            with_item = values[item_idx] + table[curr_capacity - weight][item_idx - 1]
          else
            with_item = values[item_idx]
          end
          table[curr_capacity][item_idx] = [with_item, above].max
        end
      end
    end
    table.flatten.max
  end

  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
