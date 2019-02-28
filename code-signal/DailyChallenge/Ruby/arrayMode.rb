def arrayMode(sequence)
    h = {}
    max = 0
    v = 0
    sequence.each do |n|
        if !h[n]
            h[n] = 1
        else
            h[n] += 1
            if h[n] > max 
                max = h[n]
                if v != n
                    v = n
                end
            end
        end
    end
    
    return v
end

# find the mode of an array

p arrayMode([1,2,3,1,1,1,2,2])