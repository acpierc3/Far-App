import React from 'react';

// { people }

const Table = (props) => {




  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      
          {
            props.people.map((user, i) => {
              return (
                <tr key={props.people[i].id}>  
                  <td>{props.people[i].name}</td>
                  <td>{props.people[i].email}</td>
                  <td>{props.people[i].phone}</td>
                  <td><input type='text' placeholder='Enter email' onChange={props.onEmailChange}/></td>
                  <td><button onClick={() => props.handleEmailClick(props.emailBox, props.people[i].id)} /></td>
                  <td><input type='text' placeholder='Enter phone #' onChange={props.onPhoneChange}/></td>
                  <td><button onClick={() => props.handlePhoneClick(props.phoneBox, props.people[i].id)} /></td>
                </tr>
              );
            })
          }
        </tbody>
    </table>
  );
}

export default Table;


// key={i}
// id={people[i].id}