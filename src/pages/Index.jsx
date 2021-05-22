import React, { Component } from 'react'
import MyList from '../components/MyList';
import Test from '../components/Test';
import ThemeContext from './../contexts/ThemeContext';

export default class Index extends Component {

    constructor(props) {
        super( props );

        this.state = {
            theme: `red`
        }
        

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        this.setState((prevState)=>({theme: prevState.theme === `red` ? `black` : `red`}))
    }

    render() {
        const myBooks = [`451 of Farenheit`, `100 years of solitude`, `1984`, `Karamasov brothers`]
        const myMovies = [`American history x`, `Pulp fiction`, `Inception`, `Interstellar`]
        

        const Provider = ThemeContext.Provider;
        return (
            <div>
                <Test>
                    {
                        ()=><p>Functionic ekac jsx</p>
                    }
                </Test>

                <Provider value={this.state.theme}>
                    <button onClick={this.changeColor}>Change color</button>
                    <MyList listTitle="Books" listItems={myBooks} />
                    <MyList listTitle="Movies" listItems={myMovies} />
                </Provider>
            </div>
        )
    }
}
