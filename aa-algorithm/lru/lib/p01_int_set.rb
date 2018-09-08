class MaxIntSet
  def initialize(max)
    @max = max
    @store = Array.new(max)
  end

  def insert(num)
    is_valid?(num)
    @store.push(num)
  end

  def remove(num)
    @store -= [num]
  end

  def include?(num)
    @store.include?(num)
  end

  private

  def is_valid?(num)
    raise "Out of bounds" if num > @max || num < 0
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    @store.push(num)
  end

  def remove(num)
    @store -= [num]
  end

  def include?(num)
    @store.include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
    @num_buckets = num_buckets
  end

  def insert(num)
    resize! if @count == num_buckets
    @store[num % num_buckets] << num

    @count += 1
  end

  def remove(num)
    index = num % num_buckets;
    @store[index] -= [num] if @store[index].include?(num)

    @count -= 1
  end

  def include?(num)
    index = num % num_buckets
    @store[index].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num]
  end

  def num_buckets
    @store.length
  end

  def resize!
    len = @store.length * 2
    new_store = Array.new(len) { Array.new }

    @store.each do |arr|
      arr.each do |num|
        new_store[num % len] << num
      end
    end

    @store = new_store
  end

end
