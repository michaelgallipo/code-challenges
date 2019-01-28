def productFromDifferentDigits(n)
   numbers = [0]   

	twos = [2, 1]
	threes = [3, 1]
	fours = [4, 1]
	fives = [5, 1]
	sixes = [6, 1]
	sevens = [7, 1]
	eights = [8, 1]
	nines = [9, 1]

	numbers = [0]

	twos.each do	|two|
		threes.each do |three|
			fours.each do |four|
				fives.each do |five|
					sixes.each do |six|
						sevens.each do |seven|
							eights.each do |eight|
								nines.each do |nine|
									prod = two * three * four * five * six * seven * eight * nine
									numbers << prod
								end
							end
						end
					end
				end
			end
		end
	end

  numbers = numbers.uniq.sort

    if n > numbers.length - 1
        return -1
    else
        return numbers[n]
    end

end