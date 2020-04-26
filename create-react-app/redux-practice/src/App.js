import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Todos from './routes/Todos';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import NavBar from './components/NavBar';



class App extends React.Component {
  render() {
    console.log('App did render');
    return (
        <BrowserRouter>
            <div className="container">
                <NavBar />
            </div>   
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/todos' component={Todos} />

        </BrowserRouter>
    );
  }
};

export default App;
