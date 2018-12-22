# React/Redux Async Actions Application

## Live Demo:
https://afternoon-thicket-91110.herokuapp.com/

## Front-End features
- React.js
- React router
- Redux
- Redux Middleware - **Redux Thunk**, Redux Logger
- Redux Async Actions
- Axios

**A five Redux async actions run in the application.**
![](/public/images/ReduxAsyncActions.png)

## Back-End features
- Node/Express.js
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
![](public/images/DashboardPage.png)

![](public/images/DetailPage2.png)

![](public/images/CreatePage2.png)


