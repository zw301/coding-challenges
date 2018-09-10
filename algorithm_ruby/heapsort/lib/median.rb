require_relative "heap"

class Median

  def initialize
    max_prc ||= Proc.new {|el, el2| el2 <=> el }
    @maxHeap = BinaryMinHeap.new(&max_prc)
    @minHeap = BinaryMinHeap.new
  end


  # def add(num)
  #   @maxHeap.push(num)
  #   @minHeap.push(@maxHeap.extract)
  #   if @maxHeap.count < @minHeap.count
  #     @maxHeap.push(@minHeap.extract)
  #   end
  # end

  # not work
  # def add(num)
  #   @maxHeap.push(num)
  #
  #   if @maxHeap.count > @minHeap.count + 1
  #     @minHeap.push(@maxHeap.extract)
  #   end
  #
  #   p "maxHeap: #{@maxHeap.store}"
  #   p "minHeap: #{@minHeap.store}"
  # end

  def add(num)
  end

  def find_median
    if @maxHeap.count == @minHeap.count
      return (@maxHeap.peek + @minHeap.peek) / 2.0
    end
    return @maxHeap.peek
  end

end
