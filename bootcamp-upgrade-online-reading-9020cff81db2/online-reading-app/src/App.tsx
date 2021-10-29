import React from 'react';
// @ts-ignore
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login/login';
import MainPage from './components/mainPage/mainPage';
import NavBar from './components/navBar';
import Register from './components/Register/Register';
import userProfile from './components/user';
import User from './components/user';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import User2 from "./components/UserArea/userData";
import Favorites from "./components/UserArea/Favorites";
import ToReadBooks from "./components/UserArea/ToreadBooks";
import BooksOnRead from "./components/UserArea/BooksOnread";
import BooksRead from "./components/UserArea/Booksread";
import Authors from "./components/Authors/Authors";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import Getbooks from './components/Getbooks/Getbooks';

export default class App extends React.Component {
    render() {
        return <div>
          <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <MainPage/>              
                </Route>     
                <Route path='/mainPage'>
                    <MainPage/>              
                </Route>          
                <Route path='/Register'>
                    <Register/>
                </Route>
                <Route path='/userProfile'>
                    <User/>
                </Route>
                <Route path='/userData'>
                    <User2/>
                </Route>
                <Route exact path='/Favorites'>
                    <Favorites/>
                </Route>
                <Route exact path='/ToreadBooks'>
                    <ToReadBooks/>
                </Route>
                <Route exact path='/BooksOnread'>
                    <BooksOnRead/>
                </Route>
                <Route exact path='/Booksread'>
                    <BooksRead/>
                </Route>
                <Route exact path='/Authors'>
                    <Authors/>
                </Route>
                <Route exact path='/About'>
                    <About/>
                </Route>
                <Route exact path='/footer'>
                    <Footer/>
                </Route>
                <Route exact path='/Help'>
                    <Help/>
                </Route>

                <Route path='/login'>
                    <Login/>    
                </Route> 
                <Route path='/getbooks'>
                    <Getbooks/>    
                </Route> 



            </Switch>
        </BrowserRouter>
        </div>;
    }
}