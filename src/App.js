import React from "react";
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount(){
    fetch('www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.drinks
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
      )
  }

  render() {
    const {error, isLoaded, items} = this.state;
    if(error){
      return <h1>Error {error.message} </h1>
    } else if (!isLoaded) {
      return <h1>Loading... </h1>
    } else {
        return (
          <ul>
            {items.map((item) => (
                <li key={item.name}>
                    {item.strDrink}
                    <img width='50' height="50" src={item.strDrinkThumb} alt="" />
                </li>
            ))}
          </ul>
        )
    }
  }

}

export default App;


// fetchApi branch 
