import './App.css';
import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {connect} from 'react-redux'
import {setCurrentUser} from "./redux/user/user.actions"


//components
import HeaderContainer from "./containers/header/header-container.jsx"
import Footer from "./components/footer/footer.component.jsx"
import MessageNotification from "./components/message-notification/message-notification.component.jsx"


// pages
import Homepage from './pages/homepage/homepage.component.jsx'
import NewItemPage from "./pages/new-item/new-item.component.jsx"
import ViewAllPage from "./pages/view-all/view-all.component.jsx"
import SearchResultPage from "./pages/search-results-page/search-results-page.jsx"
import ShowPage from "./pages/show-page/show-page.component.jsx"
import FilterResultsPage from "./pages/filter-page/filter-page.component.jsx"
import FailurePage from "./pages/failure-page/failure-page.component.jsx"
import RegisterPage from "./pages/register-page/register-page.component.jsx"
import SigninPage from "./pages/sign-in/sign-in.component.jsx"

function App({setCurrentUser}) {

  
  useEffect(()=>{
    console.log("triggered")
    if(window.localStorage.getItem("token")){
      console.log("triggered inside")
      setCurrentUser(window.localStorage.getItem("userId"))
    }
  })

  return (
    <Router>
      <HeaderContainer/>
      <MessageNotification/>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/new">
            <NewItemPage/>
        </Route>
        <Route exact path="/all">
            <ViewAllPage/>
        </Route>
        <Route exact path="/failure">
            <FailurePage/>
        </Route>
        <Route exact path="/register">
            <RegisterPage/>
        </Route>
        <Route exact path="/signin">
            <SigninPage/>
        </Route>
        <Route path="/search_results:query">
            <SearchResultPage/>
        </Route>
        <Route path="/filter/:typeOfQuery?/:query?">
          <FilterResultsPage/>
        </Route>
        <Route path="/:id">
            <ShowPage/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: (user) => dispatch(setCurrentUser({user})),
})


export default connect(null, mapDispatchToProps)(App);
