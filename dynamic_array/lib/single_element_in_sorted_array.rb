# find the single element in a sorted array
# of pairs of elements and only one single element
def find_single_element(arr)
  return nil if arr == nil || arr.length <= 0
  return arr[0] if arr.length == 1
  mid = arr.length / 2
  if arr[mid] != arr[mid - 1] && arr[mid] != arr[mid+1]
    return arr[mid]
  elsif arr[mid] == arr[mid - 1]
    return find_single_element(arr.take(mid))
  else
    return find_single_element(arr.drop(mid + 1))
  end
end


# test cases
p find_single_element([0])
p find_single_element([0,0,1,1,2])
p find_single_element([0,0,1,2,2])
p find_single_element([0,0,1,2,2,3,3,4,4])
