'use strict';

var _jsxFileName = '_js/examples/todo.js';
var TODO_COMPONENT = '\nvar TodoList = React.createClass({\n  render: function() {\n    var createItem = function(item) {\n      return <li key={item.id}>{item.text}</li>;\n    };\n    return <ul>{this.props.items.map(createItem)}</ul>;\n  }\n});\nvar TodoApp = React.createClass({\n  getInitialState: function() {\n    return {items: [], text: \'\'};\n  },\n  onChange: function(e) {\n    this.setState({text: e.target.value});\n  },\n  handleSubmit: function(e) {\n    e.preventDefault();\n    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);\n    var nextText = \'\';\n    this.setState({items: nextItems, text: nextText});\n  },\n  render: function() {\n    return (\n      <div>\n        <h3>TODO</h3>\n        <TodoList items={this.state.items} />\n        <form onSubmit={this.handleSubmit}>\n          <input onChange={this.onChange} value={this.state.text} />\n          <button>{\'Add #\' + (this.state.items.length + 1)}</button>\n        </form>\n      </div>\n    );\n  }\n});\n\nReactDOM.render(<TodoApp />, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: TODO_COMPONENT, __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  }
}), document.getElementById('todoExample'));