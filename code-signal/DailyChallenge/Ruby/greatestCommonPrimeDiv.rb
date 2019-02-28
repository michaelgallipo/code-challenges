def greatestCommonPrimeDivisor(a, b)
    require 'prime'
    x = a < b ? a : b
    while x > 2
        if a % x == 0 && b % x == 0 && Prime.prime?(x)
            break
        end
        x -= 1
    end
       return x > 2 ? x : -1   
end