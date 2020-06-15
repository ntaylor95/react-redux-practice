import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todos from './routes/Todos';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import NavBar from './components/NavBar';
import Post from './routes/Post';



class App extends React.Component {
  render() {
    console.log('App did render');
    console.log('This is a test');
    return (
        <BrowserRouter>
            <div className="container">
                <NavBar />
            </div>   
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/todos' component={Todos} />
                <Route path='/:postId' component={Post} />
            </Switch>
        </BrowserRouter>
    );
  }
};

export default App;
