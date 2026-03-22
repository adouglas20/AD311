"""Objective: Implement a simple text editor that allows adding text, deleting the last character, and
an undo feature using a stack data structure.

Scenario: You are creating a simple text editor that allows the user to input text, delete the last
character, and undo the last operation. Your task is to use a stack to keep track of the changes made
to the text so that you can undo the last operation when required.

Requirements:

Text Operation Class: Define a TextOperation class or struct that represents an operation performed on
the text. This class should include information about the type of operation (add or delete) and the
character involved in the operation (if applicable).

Add Text: Implement a method to add a character to the text and record this action on the stack.
Delete Text: Implement a method to delete the last character of the text and record this deletion on
the stack.

Undo: Implement an undo method that uses the stack to revert the last operation. Ensure that your
editor can handle multiple consecutive undo operations correctly."""


class TextOperation:

    def __init__(self, action_type, character):
        self.action_type = action_type
        self.character = character


class SimpleTextEditor:

    def __init__(self):
        self.text = ""
        self.operation_history = []

    def display(self):
        print(f'Current contents: {self.text}')

    def add_char(self, char):
        if not len(char) == 0:
            print("Please only add one character at a time")
            return
        self.text += char
        self.operation_history.append(TextOperation("ADD", char))
        self.display()

    def delete_char(self):
        if not self.text:
            print('No characters available to delete')
            return
        self.operation_history.append(TextOperation("DEL", self.text[-1]))
        self.text = self.text[0: -1]
        self.display()

    def undo(self):
        if not self.operation_history:
            print("No actions available to undo")
            return
        prev_op = self.operation_history.pop()
        if prev_op.action_type == "DEL":
            self.text += prev_op.character
        elif prev_op.action_type == "ADD":
            self.text = self.text[:-1]
        self.display()
