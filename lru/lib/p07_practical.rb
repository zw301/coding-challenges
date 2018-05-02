require_relative 'p05_hash_map'

def can_string_be_palindrome?(string)
  hash = Hash.new(0)
  string.chars.each do |char|
    hash[char] += 1
  end
  count = 0
  hash.values.each do |value|
    if value % 2 != 0
      count += 1
    end
    return false if count > 1
  end
  true
end
