import unittest
import animal_leg_count as alc

# :'lion', 'deer', 'elephant', 'horse', 'dog', 'cat'

class AnimalLegCountTest(unittest.TestCase):

    def test_four_leg_count_edge(self):
        self.assertEqual(alc.four_leg_count([]), 0)
        self.assertEqual(alc.four_leg_count(None), -1)
        self.assertEqual(alc.four_leg_count([None, "lion"]), 1)

    def test_four_leg_count_happy(self):
        self.assertEqual(alc.four_leg_count(['lion', 'owl', 'squid']), 1)
        self.assertEqual(alc.four_leg_count(['human', 'eagle', "butterfly"]), 0)
        self.assertEqual(alc.four_leg_count(['deer', 'elephant', 'horse']), 3)

if __name__ == "__main__":
    unittest.main()
