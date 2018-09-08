require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @store = StaticArray.new(8)
    @length = 0
    @capacity = 8
  end

  # O(1)
  def [](index)
    # raise "index out of bounds" if index >= @length
    self.check_index(index)
    @store[index]
  end

  # O(1)
  def []=(index, value)
    self.check_index(index)
    @store[index] = value
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0
    @length -= 1
    last = @store[@length]
    @store[@length] = nil
    last
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    self.resize! if(@length == @capacity)
    @store[@length] = val
    @length += 1
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" if @length == 0
    i = 0
    while i + 1 < @length
      @store[i] = @store[i + 1]
      i += 1
    end
    @store[@length - 1] = nil;
    @length -= 1
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    self.resize! if(@length == @capacity)
    i = @length
    while i > 0
      @store[i] = @store[i - 1]
      i -= 1
    end
    @store[0] = val
    @length += 1
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    if index >= @length || index < 0
      raise "index out of bounds"
    end
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    copy = @store
    @capacity = @capacity * 2
    @store = StaticArray.new(@capacity)
    i = 0;
    while i < @length
      copy[i] = @store[i];
      i += 1
    end
    @store
  end
end
