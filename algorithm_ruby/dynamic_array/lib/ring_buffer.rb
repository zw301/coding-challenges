require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    # @length = 0
    # @capacity = 8
    # @start_idx = 0
    # @store = StaticArray.new(8)
    self.store = StaticArray.new(8)
    self.capacity = 8
    self.start_idx = 0
    self.length = 0
  end

  # O(1)
  def [](index)
    # self.check_index(index)
    # @store[index]
    check_index(index)
    store[(start_idx + index) % capacity]
  end

  # O(1)
  def []=(index, val)
    # self.check_index(index)
    # @store[index] = val
    check_index(index)
    store[(start_idx + index) % capacity] = val
  end

  # O(1)
  def pop
    raise "index out of bounds" if (length == 0)

    val = self[length - 1]
    self[length - 1] = nil
    self.length -= 1

    val
  end

  # O(1) ammortized
  def push(val)
    # self.resize! if(@length == @capacity)
    # @store[@length] = val
    # @length += 1
    #
    # nil
    resize! if (length == capacity)

    self.length += 1
    self[length - 1] = val

    nil
  end

  # O(1)
  def shift
    raise "index out of bounds" if length == 0
    # i = 0
    # while i + 1 < @length
    #   @store[i] = @store[i + 1]
    #   i += 1
    # end
    # @store[@length - 1] = nil;
    # @length -= 1
    # val = self[start_idx];
    # self[start_idx] = nil
    # @length -= 1
    # @start_idx = (@start_idx + 1) % @capacity

    val = self[0]
    self[0] = nil
    self.start_idx = (start_idx + 1) % capacity
    self.length -= 1

    val

  end

  # O(1) ammortized
  def unshift(val)
    # self.resize! if(@length == @capacity)
    # copy whole arr
    # i = @length
    # while i > 0
    #   @store[i] = @store[i - 1]
    #   i -= 1
    # end
    # @store[0] = val
    # @length += 1


    # @length += 1
    # @start_idx -= 1
    # @start_idx %= @capacity
    # self[@start_idx] = val

    self.resize! if(@length == @capacity)
    self.start_idx = (start_idx - 1) % capacity
    self.length += 1
    self[0] = val
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
    raise "index out of bounds" if index < 0 || index >= @length
  end

  def resize!
    # copy = @store
    # @capacity = @capacity * 2
    # @store = StaticArray.new(@capacity)
    # i = @start_idx;
    # j = 0
    # while j < @length
    #   copy[i % @length] = @store[j];
    #   j += 1
    #   i += 1
    # end
    # @start_idx = 0
    # @store

    new_capacity = capacity * 2
    new_store = StaticArray.new(new_capacity)
    length.times { |i| new_store[i] = self[i] }

    self.capacity = new_capacity
    self.store = new_store
    self.start_idx = 0
  end
end
