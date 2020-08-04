import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import BlogPage from './views/BlogPage/Sections/BlogPage';
import CreatePost from './views/BlogPage/Sections/CreatePost';
import PostPage from './views/BlogPage/Sections/PostPage';
import SitePage from './views/SitePage/SitePage';
import MyBlogPage from './views/MyBlogPage/MyBlogPage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/blog" component={Auth(BlogPage, true)} />
          <Route exact path="/blog/createPost/:category/:category_item" component={Auth(CreatePost, true)} />
          <Route exact path="/blog/post/:postId" component={Auth(PostPage, null)} />
          <Route exact path="/site" component={Auth(SitePage, true)} />
          <Route exact path="/myblog" component={Auth(MyBlogPage, true)} />

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
