# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.
require_relative 'bst_node'

class BinarySearchTree
  attr_reader :root

  def initialize
    @root = nil
  end

  def insert(value)
    @root = insert_recursive(@root, value)
  end

  def find(value, tree_node = @root)
    # return nil if tree_node == nil
    # return tree_node if tree_node.value == value
    #
    # if value <= tree_node.value
    #   find(value, tree_node.left)
    # else
    #   find(value, tree_node.right)
    # end

    while tree_node != nil
      if value < tree_node.value
        tree_node = tree_node.left
      elsif value > tree_node.value
        tree_node = tree_node.right
      else
        return tree_node
      end
    end
    return nil
  end

  # def delete(value)
  #   if value == @root.value
  #     @root = nil
  #     @root
  #   end
  #   delete_node(@root, value)
  # end

  # replaces target node with minimum of target's right tree
  # def delete_node(tree_node, value)
  #   return nil if tree_node == nil
  #
  #   if tree_node.value > value
  #     tree_node.left = delete_node(tree_node.left, value)
  #   elsif tree_node.value < value
  #     tree_node.right = delete_node(tree_node.right, value)
  #   else
  #     # no right child
  #     return tree_node.left if tree_node.right == nil
  #     # no left child
  #     return tree_node.right if tree_node.left == nil
  #
  #     # two children
  #     # successor = BSTNode.new(tree_node.value)
  #     # successor: t/ node to delete
  #     # tree_node: the replaced node
  #     successor = tree_node
  #     tree_node = minimum(successor.right)
  #     # delete_min(successor.right)
  #     # delete the minimum node under successor and return the new stucture's root node
  #     # only want to get the stucture that already deleted the minimum
  #     # actually not delete the minimum, make the minimum replace the deleted-node
  #     tree_node.right = delete_min(successor.right)
  #     tree_node.left = successor.left
  #
  #   end
  #   return tree_node
  # end
  #
  # def delete_min(tree_node)
  #   return tree_node.right if tree_node.left == nil
  #   tree_node.left = delete_min(tree_node.left)
  #   tree_node
  # end
  #
  # def minimum(tree_node = @root)
  #   return tree_node if tree_node.left == nil
  #   minimum(tree_node.left)
  # end

  # replaces target node with maximum of target's left tree

  def delete(value)
    if value == @root.value
      @root = nil
      @root
    end
    delete_node(@root, value)
  end



  def delete_node(tree_node, value)
    return nil if tree_node == nil

    if tree_node.value > value
      tree_node.left = delete_node(tree_node.left, value)
    elsif tree_node.value < value
      tree_node.right = delete_node(tree_node.right, value)
    else
      return tree_node.left if   tree_node.right == nil
      return tree_node.right if tree_node.left == nil

      successor = tree_node
      tree_node = maximum(successor.left)

      tree_node.left = delete_max(successor.left)

      tree_node.right = successor.right
    end
    return tree_node
  end

  def delete_max(tree_node)
    return tree_node.left if tree_node.right == nil
    tree_node.right = delete_max(tree_node.right)
    return tree_node
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    return tree_node if tree_node.right == nil
    maximum(tree_node.right)
  end



  def depth(tree_node = @root)
    if tree_node == nil || tree_node.is_leaf?
      return 0
    end

    return [depth(tree_node.left), depth(tree_node.right)].max + 1
  end

  def is_balanced?(tree_node = @root)
    return true if tree_node == nil

    is_balanced?(tree_node.left) &&
    is_balanced?(tree_node.right) &&
    (depth(tree_node.left) - depth(tree_node.right)).abs <= 1
  end

  def in_order_traversal(tree_node = @root, arr = [])
    return arr if tree_node == nil

    in_order_traversal(tree_node.left, arr)
    arr.push(tree_node.value)
    in_order_traversal(tree_node.right, arr)
  end


  private
  # optional helper methods go here:
  def insert_recursive(tree_node, value)
    return BSTNode.new(value) if tree_node == nil
    if tree_node.value >= value
     tree_node.left = insert_recursive(tree_node.left, value)
    else
     tree_node.right = insert_recursive(tree_node.right, value)
    end

    tree_node
  end



end
