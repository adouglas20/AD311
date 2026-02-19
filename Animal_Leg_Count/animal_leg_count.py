""" Given an array animals representing different animals in a forest,
 return the count of animals that have exactly four legs. """

# :'lion', 'deer', 'elephant', 'horse', 'dog', 'cat'
def four_leg_count(forest_animals):
    if forest_animals is None:
        return -1
    four_leg_animal_count = 0
    four_leg_animal = ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat']
    for item in forest_animals:
        if item in four_leg_animal:
            four_leg_animal_count += 1

    return four_leg_animal_count
