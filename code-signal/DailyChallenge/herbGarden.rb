plants = [8, 7, 99]
n = 16
leaves = 0
plants = plants.sort {|a, b| b - a}
	n.times do
		p plants
		harvest = (plants[0] / 2)
		plants[0] = plants[0] - harvest
		p "#{harvest} / #{leaves} / #{plants}"
		leaves += harvest
		plants = plants.map{ |num| num + 2}.sort {|a, b| b - a}


	end


p leaves

# not maximally efficient so didn't pass the challenge.