# React/Redux async web application

## Live Demo:
https://afternoon-thicket-91110.herokuapp.com/

## Front-End features
- React.js
- React router
- axios
- Redux
- Redux Middleware - Redux Thunk, Redux Logger
- Redux async actions

**A five Redux async actions run in the application.**
![](/public/images/ReduxAsyncActions.png)

## Back-End features
- Node.js
- Express.js
- Mongoose/MongoDB
- RESTful APIs 

**List employees**
<table style="font-size:13px">
  <tr>
    <td style="background:#fafafa; font-weight: bold">HTTP Method</td>
    <td>GET</td>
  </tr>
  <tr>
    <td style="background:#fafafa; font-weight: bold">URL</td>
    <td>https://afternoon-thicket-91110.herokuapp.com/api/employees</td>
  </tr>
  <tr>
    <td style="background:#fafafa; font-weight: bold">Responses</td>
    <td>
      <div style="color: #00aa13; background-color: rgba(0, 170, 19, 0.08);">200 OK</div>
      <div style="color: #e53935;background-color: rgba(229, 57, 53, 0.06);">500 Server encountered an error</div>    
    </td>
  </tr>     
</table>


**Get a single employee**
<table style="font-size:13px">
  <tr>
    <td style="background:#fafafa; font-weight: bold">HTTP Method</td>
    <td>GET</td>
  </tr>
  <tr>
    <td style="background:#fafafa; font-weight: bold">URL</td>
    <td>https://afternoon-thicket-91110.herokuapp.com/api/employees/10</td>
  </tr>
  <tr>
    <td style="background:#fafafa; font-weight: bold">Responses</td>
    <td>
      <div style="color: #00aa13; background-color: rgba(0, 170, 19, 0.08);">200 OK</div>
      <div style="color: #e53935;background-color: rgba(229, 57, 53, 0.06);">404 Employee was not found</div>    
      <div style="color: #e53935;background-color: rgba(229, 57, 53, 0.06);">500 Server encountered an error</div>    
    </td>
  </tr>     
</table>


## Screenshot
![](public/images/EmployeeListPage.png)




# React-Redux 

1. Basic Redux 1 
2. Basic Redux 2
3. Multiple Reducers
4. Redux Dev Tool
5. Redux Middleware - redux-logger, redux-thunk
6. Redux Async Actions - CRUD with redux-thunk
7. Redux Async Actions - How to chain async actions? 
8. Redux Async Actions - CRUD with redux-promise-middleware