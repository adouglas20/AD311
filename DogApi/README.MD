Dog Facts API
A simple service to retrieve interesting facts about dogs.

Endpoint: GET /facts
Returns a list of dog facts.

URL: /facts

Get Dog Facts
Retrieve a list of dog facts from the database.

URL: /facts

Method: GET

Query Parameters:
| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| number | Integer | No | Specifies the number of facts to return. If omitted, all facts are returned. |
Example Requests
Request all facts:
GET http://localhost:3000/facts
Request a specific number of facts:
GET http://localhost:3000/facts?number=3
📂 Response Format
Success Response
Status Code: 200 OK
JSON
{
  "facts": [
    "A group of pugs is called a grumble.",
    "A dog’s nose print is unique, much like a person’s fingerprint."
  ],
  "success": true
}
Error Response
Status Code: 400 Bad Request
Occurs if the number parameter is not a valid integer.

JSON
{
  "success": false,
  "message": "Invalid request: 'number' must be a non-negative integer."
}
💻 Technical Implementation Details
Server: Built using the Express framework.

Data Storage: Facts are stored in a local array within dog_facts.js.

Logic: The server uses .slice() to handle the number parameter and provides validation to ensure robust performance.