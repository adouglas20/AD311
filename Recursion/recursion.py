def reverse_string(s):
    if s == None:
        return -1
    if len(s) <= 1:
        return s

    return s[-1] + reverse_string(s[0:-1])
