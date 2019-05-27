import * as React from "react"
// import * as ReactDOM from "react-dom"
// import {React}, Component from "react"

interface HelloProps {
  compiler: string
  framework: string
}

// export const Hello = (props: HelloProps) => (
//   <h1>
//     Hello from {props.compiler} and {props.framework}!
//   </h1>
// )

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    )
  }
}

export default Hello
