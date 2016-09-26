const React = require('react');
const ReactDOM = require('React-dom');


console.log('Main is working...')
const h = require('./helpers')
h.working()

// App_cmp
var App = React.createClass({
  render : function(){
    return(
      <div>
        <h1>Hola mundo</h1>
      </div>
    )
  }
})

ReactDOM.render(<App/>, document.querySelector('#app'))
