class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.length <= 1

    pivot = array.first
    left = array[1..-1].select{|el| el <= pivot }
    right = array[1..-1].select{|el| el > pivot }

    QuickSort.sort1(left) + [pivot] + QuickSort.sort1(right)
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }

    return array if length <= 1

    pivot_idx = QuickSort.partition(array, start, length, &prc)

    left_partition_len = pivot_idx - start
    right_partition_len = length - pivot_idx - 1

    QuickSort.sort2!(array, start, left_partition_len, &prc)
    QuickSort.sort2!(array, pivot_idx + 1, right_partition_len, &prc)

    array

  end

  # def self.partition(array, start, length, &prc)
  #   pivot = array[start]
  #
  #   lo = 0
  #   hi = start + length - 1
  #   lt = lo
  #   gt = hi
  #
  #   # return if lo >= hi
  #
  #   i = lo
  #
  #   while i <= gt
  #     if pivot > array[i]
  #       array[lt], array[i] = array[i], array[lt]
  #       lt += 1
  #       i += 1
  #     elsif pivot < array[i]
  #       array[gt], array[i] = array[i], array[gt]
  #       gt -= 1
  #     else
  #       i += 1
  #     end
  #   end
  #
  #   lt
  # end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }

    pivot_idx = start
    pivot_el = array[start]
    range = (start + 1...start + length)

    range.each do |idx|
      if prc.call(pivot_el, array[idx]) > 0
        array[pivot_idx + 1], array[idx] = array[idx], array[pivot_idx + 1]
        pivot_idx += 1
      end
    end

    array[pivot_idx], array[start] = array[start], array[pivot_idx]
    pivot_idx
  end
end
