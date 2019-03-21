# @param {Integer[]} nums
# @return {Integer[][]}
def all_permutations nums, output, output_length, output_array
  if output.length == output_length
    output_array << output
  end
  
  nums.each do |num|
    remaining = nums.dup
    remaining.delete num
    all_permutations remaining, output + [num], output_length, output_array
  end
  
  output_array
end

def permute(nums)
    return all_permutations nums, [], nums.length, []
end

p permute([1,2,3])

# Return an array of all possible permutation of an array of distinct integers
# [1, 2, 3] => [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

