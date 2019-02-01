def arrayMode(sequence)
    h = {}
    max = 0
    v = 0
    sequence.each do |n|
        if !h[n]
            h[n] = 1
        else
            h[n] += 1
            if h[n] > max && v != n
                max = h[n]
                v = n
            end
        end
    end
    
    return v
end

# find the mode of an array