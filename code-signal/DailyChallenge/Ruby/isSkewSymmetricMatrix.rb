def isSkewSymmetricMatrix(matrix)
    l = matrix.length
    x = 0
    l.times do
        y = 0
        l.times do
            if (matrix[x][y] != matrix[y][x] * -1)
                return false
            end
            y += 1
        end
        x += 1
    end
    true
end

#A square matrix that is the negative of its transpose is a skew-symmetric matrix. Find out if the given matrix is skew-symmetric.
# For matrix = [[ 0, 0,  1], 
#               [ 0, 0, -2], 
#               [-1, 2,  0]] => true