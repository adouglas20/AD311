import unittest
import animal_leg_count as alc


class AnimalLegCountTest(unittest.TestCase):

    def fourLegCountTest(self):
        self.assertEqual(alc.fourLegCount([], 0))

if __name__ == "__main__":
    unittest.main()
