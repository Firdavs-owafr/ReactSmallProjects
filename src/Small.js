import React,{Component, useState} from "react";
import './index.css';

class Small extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: 'Hello Wolrd !!!',
            subtitle: 'Main Menu'
        }
    }

    newTitle = () => {
        this.setState({subtitle: 'Howw'})
    }

    render(props) {

        const {newTitle} = this;
        const {navv} = this.props;
        const {title,subtitle} = this.state

      return (
        <div className="App">
          <header className="App-header">
            <button type="button" onClick={newTitle}>Show menu</button>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
                Small
                    <ul>
                        {Object.values(navv).map((item) => {
                            return <li>{item}</li>
                        })}
                    </ul>
          </header>
        </div>
      );
    }
}

export default Small;
