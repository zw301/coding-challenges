# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to

require_relative 'topological_sort'
require_relative 'graph'

def install_order(arr)

  vertices = (1..arr.flatten.max).to_a.map { |val| Vertex.new(val) }

  arr.each do |tuple|
    to = vertices.find {|v| v.value == tuple[0]}
    from = vertices.find {|v| v.value == tuple[1]}
    Edge.new(from, to)
  end

  sorted = topological_sort(vertices)
  sorted.map {|v| v.value}
end
