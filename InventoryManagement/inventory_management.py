"""
Given an array inventory representing the stock count of different products in a store, where each
occurrence of zero represents a product that is out of stock, duplicate each occurrence of zero
(indicating an order placed to restock that product), shifting the remaining product counts to the
right.
Note: Modifications should be done in place in the inventory array, and elements beyond the
length of the original array should not be modified.
"""

# Input: inventory = [4,0,1,3,0,2,5,0]
# Output: [4,0,0,1,3,0,0,2]


def order_items(inventory):
    i = 0
    while i < len(inventory):
        if inventory == None:
            return
        if inventory[i] == 0:
            inventory.insert(i, 0)
            i += 1
        i += 1
