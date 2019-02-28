def naturalNumbersListing(n)
    tot = 0
    count = 0
    num = 1
    while num <= n
        tot += num
        count += 1
        num += 1
        if num <= n
            tot += num
            count += 1
            num += count * 2
        end
    end
    
    tot
    
end

