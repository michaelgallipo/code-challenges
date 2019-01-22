serial_average = "009-10.30-20.90"

num1 = serial_average[4,5].to_f
num2 = serial_average[10,5].to_f
avg = (num1 + num2) / 2
output = serial_average[0,4] + '%.2f' % avg

p num1, output
# p '%.2f' % 500