import ticketing_system_simulation as tss
import unittest


class ServiceCenterTest(unittest.TestCase):

    def test_service_center_happy(self):
        ticket_system = tss.ServiceCenter()
        ticket_system.generate_tickets(3)
        ticket_system.process_tickets()

    def test_service_center_edge(self):
        ticket_system = tss.ServiceCenter()
        ticket_system.process_tickets()
        ticket_system.generate_tickets(-1)

if __name__ == "__main__":
    unittest.main()
