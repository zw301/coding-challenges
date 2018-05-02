def match(str) {
  left_chars = []
  dic = {
   "(" : ")",
   "[" : "]",
   "{" : "}"
  }

  str.chars.each do |char|
    if lookup.keys.include?(char)
      left_chars << char
    elsif left_chars.length == 0 || lookup[left_chars.pop] != char
      return false
    end
  end
  return left_chars.empty?
end
