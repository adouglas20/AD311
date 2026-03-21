import financial_growth_trends as fgt
import unittest


class FinancialGrowthTrendsTest(unittest.TestCase):

    def test_square_array_happy(self):
        self.assertEqual(fgt.square_array([-5, -2, 0, 3, 10]), [0, 4, 9, 25, 100])
        self.assertEqual(fgt.square_array([-8, -3, 2, 4, 12]), [4, 9, 16, 64, 144])
        self.assertEqual(fgt.square_array([1, -2, 3, 5, -9]), [1, 4, 9, 25, 81])

    def test_square_array_edge(self):
        self.assertEqual(fgt.square_array(None), -1)
        self.assertEqual(fgt.square_array([]), [])
        self.assertEqual(fgt.square_array(['a']), -1)


if __name__ == "__main__":
    unittest.main()
