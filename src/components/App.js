import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <section className="todoapp">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </section>
		<footer className="info">
			<p>Double-click to edit a todo</p>
			<p>Created by <a href="http://twitter.com/docodemore">Matt McFarland</a></p>
			<p>Using barracks from  <a href="https://github.com/yoshuawuyts">Yoshua Wuyts</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>    
  </div>
)

export default App
