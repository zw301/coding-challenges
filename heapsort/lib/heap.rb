class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @prc = prc
    @store = Array.new()
  end

  def count
    @store.length
  end

  def extract
    @store[0], @store[count - 1] =  @store[count - 1], @store[0]
    val = @store.pop

    BinaryMinHeap.heapify_down(self.store, 0, count, &prc)
    val
  end

  def peek
    @store[0]
  end

  def push(val)
    @store.push(val)
    BinaryMinHeap.heapify_up(self.store, count - 1, count, &prc)

  end

  public
  def self.child_indices(len, parent_index)
    result = []
    first_child_index = 2 * parent_index + 1
    second_child_index = 2 * parent_index + 2
    result << first_child_index if first_child_index < len
    result << second_child_index if second_child_index < len
    result
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    return (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    # p "origional array: #{array}"
    prc ||= Proc.new {|el, el2| el <=> el2 }

    child_indices = BinaryMinHeap.child_indices(len, parent_idx)
    if child_indices.length == 0
      # p "final: #{array}"
      return array
    end
    # p "child_idx1: #{child_indices[0]}, value: #{array[child_indices[0]]}"
    # p "child_idx2: #{child_indices[1]}, value: #{array[child_indices[1]]}"

    child_one = array[child_indices[0]]
    child_two = array[child_indices[1]] if child_indices.length == 2

    swap_idx = 0

    while child_indices[0] < len
      if child_indices.length == 1
        swap_idx = child_indices[0]
        # p ".."
      else
        swap_idx =  prc.call(child_one, child_two) == 1 ? child_indices[1] : child_indices[0]
        # p "..."
      end
      # p "swap_idx: #{swap_idx}"
      # p "parent_idx: #{parent_idx}"
      if prc.call(array[parent_idx], array[swap_idx]) == 1
      # if array[parent_idx] > array[swap_idx]
        # p "need exch"
        array[parent_idx], array[swap_idx] = array[swap_idx], array[parent_idx]
        parent_idx = swap_idx
        # p "after exch: #{array}"
        # p "after exch parent_idx: #{parent_idx}"
      else
        break
      end

      child_indices = BinaryMinHeap.child_indices(len, parent_idx)
      # p "xxx"
      if child_indices.length == 0
        # p "finalx: #{array}"
        return array
      end
      # p "after swap child_indices: #{child_indices}"
      child_one = array[child_indices[0]]
      if child_indices.length == 2
        child_two = array[child_indices[1]]
      end

      # p "after swap child_idx1: #{child_indices[0]}, value: #{array[child_indices[0]]}"
      # if child_indices.length == 2
        # p "after swap child_idx2: #{child_indices[1]}, value: #{array[child_indices[1]]}"
      # end
    end
    # p "final!!: #{array}"
    array
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new {|el,el2| el <=> el2 }

    while child_idx > 0

      parent_idx = (child_idx - 1) / 2
      # p "child_idx: #{child_idx}"
      # p "parent_idx: #{parent_idx}"

      if prc.call(array[parent_idx], array[child_idx]) == 1
        array[parent_idx], array[child_idx] = array[child_idx], array[parent_idx]
        # p "after exch: #{array}"
      else
        break
      end

      child_idx = parent_idx
      # p "new child_idx: #{child_idx}"

    end
    # p "final: #{array}"
    array
  end

end
