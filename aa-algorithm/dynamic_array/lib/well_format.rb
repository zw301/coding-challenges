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



# ({}) [()] is well-formed, [(]{)]} is not
# str has characters [,],{,},(,)

# def well_formed_string(str)
#   special = %w( [ ] ( ) { } )
#   pairs = {'[' => ']', '(' => ')', '{' => '}'}
#   # pairs.keys are left halves, pairs.values are right halves
#   chars = str.chars.select {|char| special.include?(char)}
#   return true if str.length == 0
#   stack = []
#   idx = 0
#   while idx < chars.length
#     if pairs.keys.include?(chars[idx])
#       stack.unshift(chars[idx])
#     elsif chars[idx] == pairs[stack[0]]
#       stack.shift
#     else
#       return false
#     end
#     idx += 1
#   end
#
#   return true if stack.empty?
#   false
# end
#
# # test cases
# p well_formed_string("(wefw{efwe}ew)")
# p well_formed_string("weg[()ewf]")
# p well_formed_string("[(]{)]}")
