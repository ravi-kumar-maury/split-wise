# Running application inside docker

1 . clone the repo <br>
2.  go to root folder of project <br>
3 . docker-compose up <br>

this will spin up application instance

## Features 

 ###  1. Group Expenses:
  Create and manage group expenses with multiple participants. Splitwise calculates each person's share and keeps a record of who owes whom and how much.

  ### 2. Bill Splitting:
   Split bills at restaurants or other shared expenses within the group. splitType = (Equal , directPayment) within the group

  ### 3. Expense Tracking inside group: 
    Keep track of all your expenses in one place. Splitwise maintains a history of expenses in a group.
 ### 4.  Debts Simplification for group:
    Splitwise simplifies complex debts among multiple people.


# API Documentation

This document provides an overview of the routes available in the User Management API, Group Management API, and Expense Management API.

## User Management API

### Create a new user

Create a new user by making a POST request to `/users`.

### Get a user's information

Retrieve a user's information by making a GET request to `/users/{id}`.

### Update a user's information

Update a user's information by making a PUT request to `/users/{id}`.

### Delete a user

Delete a user by making a DELETE request to `/users/{id}`.

## Group Management API

### Create a group

Create a group by making a POST request to `/groups`.

### Get a group's information

Retrieve a group's information by making a GET request to `/groups/{id}`.

### Update a group's information

Update a group's information by making a PUT request to `/groups/{id}`.

### Delete a group

Delete a group by making a DELETE request to `/groups/{id}`.

### Add a member to the group

Add a member to a group by making a POST request to `/groups/{groupId}/members`.

## Expense Management API

### Add an expense

Add an expense by making a POST request to `/expenses`.

for direct payment - POST /expenses with splitType:"direct" and additional key friend_id to whom direct payment to be done :

{
    "description":"dubai trip23",
    "amount": 166.67,
    "paid_by":18,
    "group_id": 1,
    "split_type":"direct",
    "friend_id":19
}

### Get an expense's information

Retrieve an expense's information by making a GET request to `/expenses/{id}`.

### Update an expense's information

Update an expense's information by making a PUT request to `/expenses/{id}`.

### Delete an expense

Delete an expense by making a DELETE request to `/expenses/{id}`.

## Get group insights

Get insights on how much each member owes within a group by making a GET request to `/getInsights/{groupId}`.

#### response:
{
    "group": {
        "id": 1,
        "group_name": "Brunch1",
        "created_by": 19,
        "created_at": "2023-05-18T10:05:55.505Z",
        "updated_at": "2023-05-18T10:05:55.505Z"
    },
    "totalExpenses": 1600,
    "parsedInsight": [
        {
            "user_id": 17,
            "amount_owe_by_friend": "66.00",
            "friend_id": 18
        },
        {
            "user_id": 17,
            "amount_owe_by_friend": "-33.33",
            "friend_id": 19
        },
        {
            "user_id": 19,
            "amount_owe_by_friend": "33.33",
            "friend_id": 18
        }
    ]
}

#### totalExpenses shows the amount of expense involved within the group. parsedInsight have user_id , amount_owe_by_friend ,friend_id which indicates friend_id owe amount_owe_by_friend from user_id, vice versa if amount_owe_by_friend is negative
---

Please note that `{id}` and `{groupId}` are placeholders for the actual identifiers of the user, group, or expense. Replace them with the appropriate values when making requests to the API.

Make sure to include the necessary request headers and parameters as required for each route.

For detailed information on request and response formats, refer to the API documentation or consult the API documentation for each endpoint.


## LOCAL SETUPS

### postgres local setup 
1. docker pull postgres
2. docker run --name my-postgres-container -e POSTGRES_PASSWORD=ravi  -p 5432:5432 -d postgres:latest

#### postman collection

https://www.postman.com/lively-capsule-555412/workspace/spitwise/collection/9431168-29cc2390-bde9-4ec0-859c-1d9a5fa83e46?action=share&creator=9431168
