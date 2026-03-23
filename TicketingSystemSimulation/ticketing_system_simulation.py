"""
Objective: Implement a queue to manage a ticketing system where users take a number and wait for their
turn to be served.

Scenario: You are developing a system for a service center where customers take a number and wait for
their turn. Your task is to create a program that simulates this ticketing system using a queue.

Requirements:

Ticket Class: Create a Ticket class that includes at least the following details: ticket number and
timestamp.
Generate Tickets Phase: Simulate the arrival of customers by generating ticket objects and adding them
to the queue.
Process Tickets Phase: Implement a system where tickets are dequeued and "served" by displaying the
details of the ticket being processed.
Timing: Introduce a simple form of timing where tickets are generated at random intervals, and the
serving time may vary slightly.
"""
import time
import random
from datetime import datetime


class Ticket:

    def __init__(self, number):
        self.number = number
        self.timestamp = datetime.now().strftime("%H:%M:%S")

    def __str__(self):
        return f"Ticket #{self.number} | Was started at: {self.timestamp}"


class ServiceCenter:

    def __init__(self):
        self.queue = []
        self.ticket_counter = 1

    def generate_tickets(self, count):
        if count <= 0:
            print('Please enter a positive integer')
            return
        print(f"Generating tickets for {count} customers")
        for i in range(count):
            new_ticket = Ticket(self.ticket_counter)
            self.queue.append(new_ticket)
            print(f"Ticket Issued: {new_ticket}")
            self.ticket_counter += 1

            time.sleep(random.uniform(.5, 2))
        print("All tickets generated")

    def process_tickets(self):
        print("Processing tickets...")
        if not self.queue:
            print('No tickets in queue')
            return
        while self.queue:
            current_ticket = self.queue[0]
            self.queue = self.queue[1:]
            print(f"Now working on {current_ticket}")
            process_time = random.uniform(.5, 2)
            time.sleep(process_time)

            print(f'Took {process_time}')
        print('All tickets processed')

