# README.MD


### [Video Demo](https://www.youtube.com/watch?v=AH4ykFYAQuk) of the front-end part

The system is able to 
- check order status from backend (Sent, Received, Succeed ,Failed)
- make order to backend

![System_architeture](https://i.imgur.com/e5orHC7.png)

The front-end users make requests to Server A,  then the front-end webpage display the corresponding content to ServerA response.



#### Used technologies

##### Front-End

| Technologies                                          | Description                                                  |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| [ReactJS](https://reactjs.org/)                       | A declarative and component-based Javascript Library that help build user interface effectively |
| [Bootstrap](https://getbootstrap.com/)                | CSS Framework for developing responsive and mobile-first websites. |
| [ReactStrap](https://reactstrap.github.io/)           | Easy to use React Bootstrap 4 components                     |
| [Redux](https://redux.js.org/)                        | A predictable state container for JavaScript apps.           |
| [Redux Thunk](https://github.com/reduxjs/redux-thunk) | Thunk [middleware](https://redux.js.org/advanced/middleware) for Redux. |



#### How the produced system can be tested

##### Front-End

1. open Terminal and cd to /Document (example)and clone this project<br>
  `git clone https://github.com/bill0930/react_sandwich.git`

2. `cd  make-me-a-sandwich/` 

3. run `npm install` to install all the required dependencies packages

4. `cd json-server` and run the following command `json-server --watch db.json -p 3001 -d 2000` 

5. Now you can browse the json-server resources in the following links

     http://localhost:3001/orders

     http://localhost:3001/sandwiches

   Home:  http://localhost:3001

6. After the installation and start up the json-server, run `npm start` to start up the webpage.

