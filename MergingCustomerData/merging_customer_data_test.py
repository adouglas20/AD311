import unittest
import merging_customer_data as mcd


class MergingCustomerDataTest(unittest.TestCase):

    def test_merge_cust_data_edge(self):
        cust_data1 = []
        cust_data2 = []
        mcd.merge_cust_data(cust_data1, cust_data2)
        self.assertEqual(cust_data1, [])
        cust_data1 = [-1]
        mcd.merge_cust_data(cust_data1, cust_data2)
        self.assertEqual(cust_data1, [-1])
        cust_data1 = []
        cust_data2 = [-6]
        mcd.merge_cust_data(cust_data1, cust_data2)
        self.assertEqual(cust_data1, [-6])

    def test_merge_cust_data_happy(self):
        cust_data1 = [1, 989, 1000]
        cust_data2 = [2, 999]
        mcd.merge_cust_data(cust_data1, cust_data2)
        self.assertEqual(cust_data1, [1, 2, 989, 999, 1000])
        cust_data1 = [-989, -1, 1000]
        cust_data2 = [2, 999]
        mcd.merge_cust_data(cust_data1, cust_data2)
        self.assertEqual(cust_data1, [-989, -1, 2, 999, 1000])
        cust_data1 = [200, 989, 1000]
        cust_data2 = [2, 999]
        mcd.merge_cust_data(cust_data1, cust_data2)
        self.assertEqual(cust_data1, [2, 200, 989, 999, 1000])


if __name__ == "__main__":
    unittest.main()
