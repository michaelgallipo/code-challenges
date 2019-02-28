# solution Number 1 - worst

# note = "you'll n4v4r 6u4ss 8t: cdja"

# arr = note.split('')

# hash = {'a' => 0, 'b' => 1, 'c' => 2, 'd' => 3, 'e' => 4, 'f' => 5, 'g' => 6, 'h' => 7, 'i' => 8, 'j' => 9, '0' => 'a', '1' => 'b', '2' => 'c', '3' => 'd', '4' => 'e', '5' => 'f', '6' => 'g', '7' => 'h', '8' => 'i', '9' => 'j'}

# arr.each_with_index do |letter, i|
# 	if letter[/[a-j]/] || letter[/\d/]
# 		arr[i] = hash[letter]
# 	end
# end

# msg = arr.join().to_s
# msg

# Solution Number 2 - Better

note = "you'll n4v4r 6u4ss 8t: cdja"


note = note.split('')
i = 0
note.each do |ltr|
	if ltr=~/[a-j]/
		note[i] = ltr.ord - 97
	elsif ltr=~/[0-9]/
		note[i] = (ltr.ord + 49).chr			
	end
	i += 1

end

# p note.join()

# Solution #3 - Not working

# note = "you'll n4v4r 6u4ss 8t: cdja"

# note.gsub!(/[a-j0-9]/) {|m| m.ord - 97 || (m.ord + 49).chr }
# # note.gsub!(/[0-9]/) {|m| (m.ord + 49).chr}

# p note

str = "you'll n4v4r 6u4ss 8t: cdja"

p str.match(/[a-j]/)


