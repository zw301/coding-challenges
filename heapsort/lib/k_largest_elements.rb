require_relative 'heap'

def k_largest_elements(array, k)
  heap = BinaryMinHeap.new

  array.each do |el|
    heap.push(el)

    if(heap.count == k + 1)
      heap.extract
    end

  end

  heap.store
end
