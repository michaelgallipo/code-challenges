def replaceDigitWithPrime(n)
    require 'prime'
    nums = n.digits
    tot = 0
    if nums.length == 1
        return Prime.first(n+1)[-1]
    else 
        nums.each.with_index do |num, index|
            mult = 10 ** (index + 1) / 10
                if num < 4
                    tot += Prime.first(num+1)[-1] * mult
                else
                    subt = Prime.first(num+1)[-1].digits
                    tot += subt[0] * mult
                    tot += subt[1] * (mult * 10)
                end
        end
        return tot
    end

end

