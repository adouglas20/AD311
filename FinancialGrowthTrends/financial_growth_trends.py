def square_array(list1):
    list2 = []
    if list1 == None:
        return -1
    for i in list1:
        if not isinstance(i, int):
            return -1
        list2.append(i ** 2)
    list2.sort()
    return list2

