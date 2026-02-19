""" Given an array animals representing different animals in a forest,
 return the count of animals that have exactly four legs. """

# :'lion', 'deer', 'elephant', 'horse', 'dog', 'cat'
def fourLegCount(input):
    fourLeggedAnimals = ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat']
    fourLeggedAnimalCount = 0
    for i in input:
        if i in fourLeggedAnimals:
            fourLeggedAnimalCount += 1
    return fourLeggedAnimalCount
