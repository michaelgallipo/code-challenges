def countSumOfTwoRepresentations(n, l, r)
    a = (l..r).to_a
    c = 0
    a.each_with_index do |num, i|
        ind = i
        (a.length - i).times do
            if num + a[ind] == n
                c += 1
            end
            ind += 1
        end
    end
    c
end

# Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

# For n = 6, l = 2, and r = 4 => 2 (2 + 4 and 3 + 3)