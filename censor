def censor(text, word):
    
    words = text.split()
    length = len(words) - 1
    
    while length >= 0:
        if words[length] == word:
            censored = ""
            cover = len(words[length])
            while cover > 0:
                censored += "*"
                cover -= 1
            print censored
            words[length] = censored
        length -= 1
    result = " ".join(words)
    return result
    

print censor("TESTING HI HI HI", "HI")
