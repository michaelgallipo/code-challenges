sum = (1..5).reduce(0) {|sum, num| sum + num**2 + 1}

p sum

# Consider an arithmetico-geometric sequence where the  term of the sequence is denoted by . In this challenge, your task is to complete the sum method which takes an integer n and returns the sum to the n terms of the series.