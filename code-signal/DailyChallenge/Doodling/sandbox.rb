# def find_missing_letter(str)

# arr = (str[0]..str[-1]).to_a
#   if arr.length == str.length
#  		return nil
#   else
# 		missing = ""
# 		i = 0
# 		arr.each do |letter|
# 			if letter == str[i]
# 				i += 1
# 			else
# 				missing += letter
# 			end

# 		end
# 		return missing
# 	end

# end

# p find_missing_letter("abcdlmnop")


# str = "hello"

# str.each_char do |letter|
#  p letter
# end

# s1, s2 = "Tokyo", "Kyoto"

# a1 = s1.downcase.split('').sort
# a2 = s2.downcase.split('').sort
# p a1, a2
# p a1 == a2



# initial_array = ['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris', 'Sapir', 'Otoky']

# output = []
# i = 1

# initial_array.each do |elem|
# 	found = false
# 	output.each do |arr|
# 		if elem.downcase.split('').sort == arr[0].downcase.split('').sort
# 			arr.push(elem)
# 			found = true
# 		end
# 	end
# 	if !found 
# 		output.push([elem])
# 	end
# end

# p output

# a = [[1,3], [2,3]]

# p a.first.first

# num = 2

# p num.digits(2)



# p Date.today

# def palidrome? word1, word2
#   concat_word = word1 + word2
#   # return concat_word == concat_word.reverse

#   x = 0
#   y = concat_word.length - 1
#   while x < concat_word.length / 2
#     if concat_word[x] != concat_word[y]
#       return false
#     end
#     x += 1
#     y -= 1
#   end
#   return true
# end

# p palidrome?("abcde", "dcba")

a = [1, 2, 3]
b = [4, 5, 6]
p (a + b).uniq == a.uniq + b.uniq
