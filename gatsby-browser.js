const React = require("react")
const GlobalStyle = require("./src/styles/GlobalStyle")
const Header = require("./src/components/Header/Header")

// Wraps every page in a component
exports.wrapPageElement = ({element, props}) => {
  return <>
    <GlobalStyle/>
    <Header/>
    <div {...props}>{element}</div>
  </>
}
