import React from 'react'
import ReactDOM from 'react-dom'



import 'normalize.css/normalize.css'
import './styles/styles.scss'

/*
const template = (<div>
	<p> Hello World!</p>
</div> 
)
ReactDOM.render(template,document.getElementById('app'))
*/


export default class App extends Component {
  render() {
	return (
	  <div>
		<p> Hello World! </p>
	  </div>
	)
  }
}



ReactDOM.render(<App/>,document.getElementById("app"))
console.log("app is running!")
