import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const element = React.createElement(
  "h1",
  { className: "red_hello" },
  "Hello World"
);

const FunctionalHello = () => <h1 className="blue_hello">Hello World</h1>;

class ClassHello extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

class PureHello extends React.PureComponent {
  render() {
    return <h1>Hello World</h1>;
  }
}

const root = React.createElement(
  "div", {}, element, <FunctionalHello />, <ClassHello />, <PureHello />
);

ReactDOM.render(root, document.getElementById("root"));
