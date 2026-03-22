import unittest
import simple_text_editor as ste


class SimpleTextEditorTest(unittest.TestCase):

    def test_simple_text_editor_happy(self):
        editor = ste.SimpleTextEditor()
        editor.add_char("t")
        editor.add_char("e")
        editor.add_char("s")
        editor.add_char("t")
        self.assertEqual(editor.text, "test")
        editor.delete_char()
        self.assertEqual(editor.text, "tes")
        editor.undo()
        self.assertEqual(editor.text, "test")

    def test_simple_text_editor_edge(self):
        editor = ste.SimpleTextEditor()
        editor.undo()
        editor.delete_char()
        editor.add_char('fasd')



if __name__ == "__main__":
    unittest.main()
