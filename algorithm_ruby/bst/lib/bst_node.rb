class BSTNode
  attr_reader :value
  attr_accessor :left, :right

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end

  def is_leaf?
    @left == nil && @right == nil
  end

  
  # def delete(child)
  #   @left = nil if @left == child
  #   @right = nil if @right == child
  # end
  #
  # def insert(child)
  #   @left = child if @left == nil && value <= child.value
  #   @right = child if @right == nil && value > child.value
  # end

  # def initialize(value)
  #   @value = value
  # end
  #
  # def add_node(node)
  #   if node.value <= @value
  #     if @left == nil
  #       @left = node
  #       @left.parent = self
  #     else
  #       @left.add_node(node)
  #     end
  #   elsif node.value > @value
  #     if @right == nil
  #       @right = node
  #       @right.parent = self
  #     else
  #       @right.add_node(node)
  #     end
  #   end
  # end
  #
  # def find_node(value)
  #   if value == @value
  #     return self
  #   elsif value <= @value
  #     if @left == nil
  #       return nil
  #     else
  #       @left.find_node(value)
  #     end
  #   elsif value > @value
  #     if @right == nil
  #       return nil
  #     else
  #       @right.find_node(value)
  #     end
  #   end
  # end
  #
  # def delete_node(value)
  #   target = find_node(value)
  #
  #   # no child
  #   # one child
  #   # two children
  #
  # end



end
