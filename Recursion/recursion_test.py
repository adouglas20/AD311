import recursion as rec
import unittest


class RecursionTest(unittest.TestCase):

    def test_reverse_string_happy(self):
        self.assertEqual(rec.reverse_string("Hello World!"), "!dlroW olleH")
        self.assertEqual(rec.reverse_string(",mnbvcxz"), "zxcvbnm,")
        self.assertEqual(rec.reverse_string("1234567890-"), "-0987654321")

    def test_reverse_string_edge(self):
        self.assertEqual(rec.reverse_string("1234567890-=1234567890-="), "=-0987654321=-0987654321")
        self.assertEqual(rec.reverse_string(None), -1)
        self.assertEqual(rec.reverse_string("Hello World!"), "!dlroW olleH")



if __name__ == "__main__":
    unittest.main()
