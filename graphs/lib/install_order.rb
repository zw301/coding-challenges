# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to

require_relative 'topological_sort'
require_relative 'graph'

def install_order(arr)
  vertices = (1..arr.flatten.max).to_a.map { |id| Vertex.new(id) }

  arr.each do |tuple|
    v1_idx, v2_idx = find_vertex_idx(vertices, tuple[0]), find_vertex_idx(vertices, tuple[1])
    v1, v2 = vertices[v1_idx], vertices[v2_idx]
    Edge.new(v2, v1)
  end

  sorted = topological_sort(vertices)

  sorted.map { |v| v.value }
end

def find_vertex_idx(arr, id)
  arr.index { |v| v.value == id }
end
