def theSmallestStringCipher(key, message)
    kArray = key.split('')
    mArray = message.split('')
    o = ''
    (kArray.length + mArray.length).times do
            length = o.length
            x = 1
            while o.length == length
                if !kArray[x] || mArray[x] && mArray[x].ord < kArray[x].ord
                    o += mArray.shift
                elsif !mArray[x] || kArray[x] && kArray[x].ord < mArray[x].ord
                    o += kArray.shift
                else    
                    x += 1 
                end
            end
        end
        puts "#{kArray} + " " + #{mArray}"
    end
    p o
    
end

theSmallestStringCipher("ssssb", "ssssa")