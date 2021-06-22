import './App.css';
import React, {useEffect} from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import {connect} from 'react-redux'
import {setCurrentUser} from "./redux/user/user.actions"
import { setCurrentMessage } from './redux/message/message.actions';


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
import ProfilePage from "./pages/profile-page/profile-page.component.jsx"
import EditProfilePage from "./pages/edit-profile-page/edit-profile-page.component.jsx"
import ResetPasswordPage from "./pages/reset-password-page/reset-password-page.component.jsx"
import DeleteProfilePage from "./pages/delete-profile-page/delete-profile-page.component.jsx"
import ForgotPasswordPage from "./pages/forgot-password-page/forgot-password-page.component.jsx"

import {fetchUserApp} from "./App.fetch"

function App({setCurrentUser, setCurrentMessage}) {

  useEffect(()=>{
    if(window.localStorage.getItem("token")){
        fetchUserApp(setCurrentUser, setCurrentMessage)
    }
  })

  return (
      <>
      <HeaderContainer/>
      <MessageNotification/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/new" component={NewItemPage}/>
        <Route exact path="/all" component={ViewAllPage}/>
        <Route exact path="/failure" component={FailurePage}/>
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/signin" component={SigninPage}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/profile/edit" component={EditProfilePage}/>
        <Route exact path="/profile/resetPassword" component={ResetPasswordPage}/>
        <Route exact path="/profile/delete" component={DeleteProfilePage}/>
        <Route exact path="/profile/forgotPassword" component={ForgotPasswordPage}/>
        <Route path="/search_results:query" component={SearchResultPage}/>
        <Route path="/filter/:typeOfQuery?/:query?" component={FilterResultsPage}/>
        <Route path="/:id" component={ShowPage}/>
      </Switch>
      <Footer/>
      </>
  );
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setCurrentMessage: (message) => dispatch(setCurrentMessage(message))
})


export default connect(null, mapDispatchToProps)(App);
