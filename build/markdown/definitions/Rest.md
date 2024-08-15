# REST (Representationl State Transfer)

## Definitions
REST is an architectural style for designing networked applications. It relies on a stateless, client-server, cacheable communications protocol, typical HTTP.
RESTful systems use HTTP methods explicity and are built around resources that are identified by URLs. REST

# Resources
 - Resource: An object or representation of something that can be accessed via a URL. In REST, resources are typically represented by JSON or XML. RESTful

 - URI (Uniform Resource Identifier): The unique address of a resource within a RESTful service. 

# HTTP Methods
RESTful services utilize standard HTTP methods to perform actions on resources:

 - GET
    - Used to retrieve information from a resource
    - Safe and idempotent; it does not change the state of the resource
    - Example: `GET /users/123` retrieves the information of the user with ID 123.
 - POST
    - Used to create a new resource
    - Not idempotent; calling the same POST request multiple times may create multiple resources
    - Example: `POST /users` with a JSON body to create a new user
 - PUT
   - Used to update or replace a resource
   - Idempotent; calling the same PUT request multiple time results in the same resource state
   - Example: `PUT /users/123` updates the users with ID 123
 - DELETE
   - Used to delete a resource
   - Idempotent; calling DELETE multiple times for the same resource will have the same effect
   - Example: `DELETE /users/123` removes the user with ID 123
 - PATCH
   - Used to make partial updates to a resource
   - Example: `PATCH /users/123` with a JSON body to update only specific fields of the user


Please note: These HTTP methods are best practices and systems can be misconfigured (Such as non-idempotency with a GET request)

# Status Codes
RESTful APIs use standard HTTP status codes to indicate the result of an operation:
 - 200 OK
    - Request was successful

 - 201 Created
    - A resource was successfully created

 - 204 No Content
    - The request was successful, but there is no content to return (common with DELETE)

 - 400 Bad Request
    - The request was malformed or contains invalid data

 - 401 Unauthorized
    - Authentication is required and has failed or not been provided

 - 403 Forbidden
    - The client does not have permission to access the resource

 - 404 Not Foudn
    - The resource could not be found

 - 500 Internal Server Error
    - The server encountered an error and could not complete the request


Please note: These HTTP status codes are best practices and systems can be misconfigured


# RESTful principles
RESTful services adhere to several principles to ensure scalability, simplicity, and performance

- Statelessness
    - Each request from the client to the server must contain all the information the server needs to fulfill the request. The server does not store session state between requests.
- Client-Server Architecture
    - The client and server operate independently, with the client responsible for the user interface and the server for processing requests and returning data
- Cacheability
     - Responses must define whether they can be cached or not. Proper caching can reduce server load and improve performance
- Layered System
     - The architecture is composed of hierarchical layers, with each layer performing specific functions. This abstraction allows different components to evolve independently
- Uniform Interface
     - Resources are accessed via a consistent interface (e.g., using standard HTTP methods) to simplify the interaction between components

# Best Practices
- Use Nouns for Resources
    - Resource URLs should be nouns (e.g, `/users`, `/orders`) to represent entities within the system
- Plural Names for Resource Collections
    - Use plural nouns for collections of resources (e.g., `/users` for the collection of all users)
- Versioning
     - Version your API to ensure backward compatibility (e.g., `/v1/users`)
- Error Handling
     - Provide meaningful error messages in the response body along with appropriate HTTP status codes
- Pagination
    - For resources that return large lists, implement pagination to limit the number of returns resulted in a single requerst (e.g., `GET /users?page=2&limit=50`)
- HAETOAS (Hypermedia as the Engine of Application State)
    - Include links in your API responses to related resources, guiding clients on hot to interact with the API dynamically