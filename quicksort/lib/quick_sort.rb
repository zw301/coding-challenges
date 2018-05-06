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

  # In-place.
  # def self.sort2!(array, start = 0, length = array.length, &prc)
  #   return if length <= 1
  #   pivot_idx = self.partition(array, start, length, &prc)
  #   self.sort2!(array, start, pivot_idx - start, &prc)
  #   self.sort2!(array, pivot_idx + 1, start + length - 1 - pivot_idx, &prc)
  # end

  def self.partition(array, start, length, &prc)

    pivot = array[start]

    lo = start
    hi = start + length - 1
    lt = lo
    gt = hi

    # return if lo >= hi

    i = lo + 1

    while i <= gt
      if pivot > array[i]
        array[lt], array[i] = array[i], array[lt]
        lt += 1
        i += 1
      elsif pivot < array[i]
        array[gt], array[i] = array[i], array[gt]
        gt -= 1
      else
        i += 1
      end
    end

    lt
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }

    # i = start
    # pivot = array[start]
    # range = (start + 1...start + length)
    #
    # range.each do |j|
    #   if prc.call(pivot, array[j]) > 0
    #     array[i + 1], array[j] = array[j], array[i + 1]
    #     i += 1
    #   end
    # end
    #
    # array[i], array[start] = array[start], array[i]
    # i

    pivot = array[start]

    cur = start + 1
    left = start + 1
    while cur < start + length
      if prc.call(array[cur], pivot) < 0
        array[left], array[cur] = array[cur], array[left]
        left += 1
      end
        cur += 1
    end

    # put pivot val back to the correct position
    array[start], array[left - 1] = array[left - 1], array[start]
    # return partition point idx
    left - 1

  end


  # def self.partition(array, start, length, &prc)
  #   prc ||= Proc.new { |x, y| x <=> y }
  #   pivot = array[start]
  #
  #   i = start + 1
  #   j = start + length - 1
  #
  #   #nothing to the left of i is greater than the partitioning element
  #   #nothing to the right of j is less than the partitioning element

  #   while (i <= j)
  #     if prc.call(array[i], pivot) < 0
  #       i += 1
  #       break if i == start + length
  #     elsif prc.call(array[j], pivot) >= 0
  #       j -= 1
  #       break if j == start
  #     else
  #       array[i], array[j] = array[j], array[i]
  #       i += 1
  #       j -= 1
  #     end
  #   end
  #
  #   array[j], array[start] = array[start], array[j]
  #   j
  # end
end
