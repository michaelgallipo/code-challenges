m = [[1,2,3,4],[1,2,3,4],[1,2,5,6]]
    y = 0
    a = []
    (m.length - 1).times do
        x = 0
        (m[0].length - 1).times do
            a.push([m[y][x], m[y][x+1], m[y+1][x], m[y+1][x+1]])
            x += 1
            p a
        end
        y += 1
    end
     p a.uniq.length