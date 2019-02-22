string = "     Ready, steady, go!"

arr = string.scan(/[a-zA-z]*/)
p arr
arr.uniq!
arr.sort! {|a, b| a.length <=> b.length}




p arr[-1]
