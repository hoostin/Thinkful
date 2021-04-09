import React from "react";
//import Header from "../Header";
//import NotFound from "../NotFound";

// const [alertList, setList] = useState([]);
// const alertListRef = useRef(alertList);
// alertListRef.current = alertList;
// let test = alertListRef.current;

// function onClick() {
//   const index = alertListRef.current.length;
//   test.push(<Alert key={index} test={index} />);
//   setList([...test]);
//   console.log(test[index].props);
//   window.setTimeout(function () {
//     const currentTest = alertListRef.current;
//     removeTest(currentTest);
//   }, 2000);
// }
// function removeTest(test) {
//   if (test.length === 0) {
//     setList([]);
//   } else {
//     test.shift();
//     setList([...test]);
//   }
// }
// return (
//   <div>
//     <button onClick={onClick}>test</button>
//     {test}
//   </div>
// );

// import {
//   Link,
//   NavLink,
//   Route,
//   Switch,
//   useParams,
//   useRouteMatch,
// } from "react-router-dom";

export default function Alert({ test }) {
  return (
    <div className="container my-4">
      <div className="alert alert-success" role="alert">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Success! {test}</strong> Card added successfully
      </div>
    </div>
  );
}
