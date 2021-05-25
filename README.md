401 lab 07 Bearer Authorization
# LAB - 07
## bearer-auth
### Author: Tamara Al-billeh

* [deployment for main branch](https://tamara-bearer-auth.herokuapp.com/) .
* [submission PR](https://github.com/tamaraalbilleh/bearer-auth/pulls) .
* [tests report](https://github.com/tamaraalbilleh/bearer-auth/actions) .
 
### Setup

#### `.env` requirements

- `PORT` - 5000

#### Running the app

- `npm start`
- Endpoint: `/`
  - Returns message

    ```

    'welcome to home page!';

    ```
  
- Endpoint: `/signup`
  - Gets the user password and username stored

  ```

  {
    "user": {
        "_id": "60ad4f55e6eb951da748d2c7",
        "username": "riva",
        "password": "$2b$10$p5IGzxjnC.HGVyDY9dXbRubl8zhLdslw2Aes1RUunx78IdlPnesV.",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpdmEiLCJpYXQiOjE2MjE5NzA3NzR9.aMG46F_D87Dr7XoVxBmFNTTRvWu3khMDWEAnCjHR_Ng"
    }

  ```

- Endpoint: `/signin`
  - Gets the user password and username from database and compare them to the ones provided 

  ```

  {
    "user": {
        "_id": "60ad4fc9d8f6351ddfdb93af",
        "username": "riva",
        "password": "$2b$10$C1yP3vlEVeXdaq3CTRbXP..EJHklP9i7MTIp5pkTJLWIZvrh58okC",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpdmExIiwiaWF0IjoxNjIxOTcxMjAyfQ.duCQ7iRnCu9xtp1gu81SdEteqSKujDT2VHpnJr1UjTk"
    }

  ```

- Endpoint: `/users`
  - Returns an Object

        ```

        {
            "user": "riva1"
        }

        ```
- Endpoint: `/secret`
  - Returns an Object

    ```

    'Welcome to the secret area!'

    ```
- Endpoint: **anything else ..**
  - Returns an error 404
  - Returns an Object

    ```

    {
        "status": 404,
        "message": "Sorry , Page not Found"
    }

    ```
#### Tests

- Unit Tests: `npm run test`
![tests](./assets/aaa.PNG)
- Lint Tests: `npm run lint`

#### UML

(Created with [diagrams](https://app.diagrams.net/))

![UML Diagram](./assets/uml.png)
[for more clear view](https://app.diagrams.net/#G1A1zG4gBz0nRR9OKmVet0FRHUvjJdE55j) 