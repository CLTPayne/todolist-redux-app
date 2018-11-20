// // Example of the under the hood code in the React-Redux package
// // For the Provider component
//
// import React, { Component } from 'react';
//
// class Provider extends Component {
//   getChildContext() {
//     return {
//       store: this.props.store
//     }
//   }
//
//   render() {
//     return this.props.children;
//   }
// }
//
//
// // You need to explicitly declare the proptypes of the provider
// // And same for any component that accesses this child context
//
// Provider.childContextTypes = {
//   store: React.PropTypes.object
// };
