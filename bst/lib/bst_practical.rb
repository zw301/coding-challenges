
def kth_largest(tree_node, k)
  right_count = get_count(tree_node.right)

  if right_count == k - 1
    tree_node
  elsif right_count >= k
    kth_largest(tree_node.right, k)
  else
    kth_largest(tree_node.left, k - 1 - right_count)
  end
end

def get_count(tree_node)
  return 0 if tree_node == nil
  return get_count(tree_node.left) + get_count(tree_node.right) + 1
end


def kth_smallest(tree_node, k)
  left_count = get_count(tree_node.left)

  if left_count == k - 1
    tree_node
  elsif left_count >= k
    kth_smallest(tree_node.left, k)
  else
    kth_smallest(tree_node.right, k - left_count - 1)
  end
end
