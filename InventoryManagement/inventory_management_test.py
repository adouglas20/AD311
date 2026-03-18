import unittest
import inventory_management as im


class InventoryManagementTest(unittest.TestCase):

    def test_order_items_happy(self):
        inventory = [1, 0, 3, 0, 5, 0, 6]
        im.order_items(inventory)
        self.assertEqual(inventory, [1, 0, 0, 3, 0, 0, 5, 0, 0, 6])
        inventory = [1, 8, 3, 8, 5, 0, 6]
        im.order_items(inventory)
        self.assertEqual(inventory, [1, 8, 3, 8, 5, 0, 0, 6])
        inventory = [0, 7865, 2390, 0, 4532]
        im.order_items(inventory)
        self.assertEqual(inventory, [0, 0, 7865, 2390, 0, 0, 4532])

    def test_order_items_edge(self):
        inventory = []
        im.order_items(inventory)
        self.assertEqual(inventory, [])
        inventory = [0, 0, 0, 0]
        im.order_items(inventory)
        self.assertEqual(inventory, [0, 0, 0, 0, 0, 0, 0, 0])
        inventory = None
        im.order_items(inventory)
        self.assertEqual(inventory, None)


if __name__ == "__main__":
    unittest.main()
