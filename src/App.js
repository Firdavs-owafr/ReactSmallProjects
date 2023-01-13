import React,{Component} from "react";
import Small from "./Small";
import './index.css';


class App extends Component {

    render(props) {

      const {title,navv,go} = this.props;

      return (
        <div className="App">
          <header className="App-header">
              App
              <section>{title},{go}</section>
              <Small navv={navv} />
          </header>
        </div>
      );
    }
}

export default App;
