require_relative "heap"

class Array
  def heap_sort!
    @heap = BinaryMinHeap.new(&prc)

    self.each do |el|
      @heap.push(el)
    end

    i = 0
    while @heap.store.length != 0
      self[i] = @heap.extract
      i += 1
    end
    self
  end
end
