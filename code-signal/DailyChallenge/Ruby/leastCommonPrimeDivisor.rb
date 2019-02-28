def leastCommonPrimeDivisor(a, b)
    require 'prime'
    x = a < b ? a : b
    y = 2
    while y <= x
        if a % y == 0 && b % y == 0 && Prime.prime?(y)
            break
        end
        y += 1
    end
       return y <= x ? y : -1   
end

p leastCommonPrimeDivisor(13, 15)