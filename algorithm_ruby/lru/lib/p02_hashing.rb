class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    return 0.hash if self.length == 0
    # self.map{|el| el.to_i.hash}
    result = 0
    self.each_with_index do |el, index|
      result += (el.hash + index.ord.hash).hash
    end

    result
  end
end

class String
  def hash
    result = 0
    self.chars.each_with_index do |char, idx|
      result = result + (char.ord * idx).hash
    end
    result
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    result = 0
    self.each do |k, v|
      result = result + (k.to_s.ord * v.to_s.ord).hash
    end
    result
  end
end
