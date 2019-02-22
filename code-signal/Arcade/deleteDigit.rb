def delete_digit(n)

	max = 0
	arr = n.to_s.split('')
	p arr

	arr.each_with_index do |num, ind|
		arr[ind] = ""
		s = arr.join('').to_i
		s > max ? max = s : max
		arr[ind] = num
	end

	p max

end

delete_digit(101)