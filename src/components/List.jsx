let React = require('react');
let ListItem = require('./ListItem.jsx')

let ingredients = [{ "id": 1, "text":"ham"}, {"id":2, "text":"cheese"}, {"id":3, "text":"potatoes"}];

class List extends React.Component {
  render() {
    let listItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />
    });
    return (
      <ul>{listItems}</ul>
    )
  }
}

module.exports = List;
