import React from "react";

function Roster(props) {
  const {detailed, roster} = props;
  if(detailed)
  {
    const tableRows = roster.map(({firstName, lastName, location}, index) => (
      <tr key= {index}>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{location}</td>
      </tr>
    ));
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
  }
  else {
    const list = roster.map(({firstName}, index) => <li key={index}>{firstName}</li>);
  return <ol>{list}</ol>;
  }
}

export default Roster;

// import React from "react";
// function Roster(props) {
//   const { detailed, roster } = props;
//   if (!detailed) {
//     const col = roster.map(({ firstName }, index) => (
//         <li key={index}>{firstName}</li>
//     ));

//     return <ol>{col}</ol>;
//   } else {
//     const rows = roster.map(({ firstName, lastName, location }, index) => (
//       <tr key={index}>
//         <td>{firstName}</td>
//         <td>{lastName}</td>
//         <td>{location}</td>
//       </tr>
//     ));

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Location</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }

// }
// export default Roster;