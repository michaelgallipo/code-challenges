def digitDegree(n)
  count = 0 
  while n > 9
    a = n.digits
    n = a.reduce(0) {|tot, num| tot + num}
    count += 1
  end
  count

end

p digitDegree(91)