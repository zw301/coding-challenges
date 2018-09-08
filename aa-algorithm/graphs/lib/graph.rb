class Vertex
  attr_accessor :value, :in_edges, :out_edges
  def initialize(value)
    @value = value
    @in_edges = []
    @out_edges = []
  end

  def remove_in_edge(edge)
    @in_edges.delete(edge)
  end

  def remove_out_edge(edge)
    @out_edges.delete(edge)
  end

end

class Edge
  attr_accessor :from_vertex, :to_vertex, :cost
  def initialize(from_vertex, to_vertex, cost = 1)
    @from_vertex = from_vertex
    @to_vertex = to_vertex
    @cost = 1

    add_self
  end

  def add_self
    @from_vertex.out_edges << self
    @to_vertex.in_edges << self
  end

  def destroy!
    @from_vertex.remove_out_edge(self)
    @to_vertex.remove_in_edge(self)
    @from_vertex = nil
    @to_vertex = nil
  end
end
