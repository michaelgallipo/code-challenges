n = 2000

arr = []
new_row = []

(n * 2 + 2).times do
	arr.push(0)
end

arr[n] = 1
new_row.replace(arr)
start = n - 1
end_pos = n + 1
ind = start
test_string = ""

n.times do

	while ind <= end_pos
		test_string = arr[ind-1].to_s + arr[ind].to_s + arr[ind + 1].to_s
		if test_string == "100" || test_string == "010" || test_string == "001" || test_string == "011" 
					new_row[ind] = 1 
		else
				new_row[ind] = 0
		end
		ind += 1
	end

	arr.replace(new_row)
	start -= 1
	end_pos += 1
	ind = start
end

arr = arr.select {|n| n == 1}
p arr.length

# works, but times out on larger numbers so didn't pass the challenge
