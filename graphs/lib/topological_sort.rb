require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

def topological_sort(vertices)
  sorted = []
  queue = []
  vertices.each do |vert|
    queue << vert if vert.in_edges.length == 0
  end
  until queue.empty?
    current = queue.pop
    sorted << current
    edges = []
    current.out_edges.each do |edge|
      queue.unshift(edge.to_vertex) if edge.to_vertex.in_edges.length == 1
      edges << edge
    end
    edges.each {|edge| edge.destroy! }
  end
  return [] unless sorted.length == vertices.length
  sorted
end
