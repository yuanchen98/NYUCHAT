// import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import App from "./App";
import NavBar from "./components/NavBar";
import { Home } from "./components/Home";
import Answer from "./components/Answer";
import Regist from "./components/Regist";
import AdDrop from "./components/AdDrop";
import Post from "./components/Post";
import SearchResult from "./components/SearchResult";
import PostQuestion from "./components/PostQuestion";
import CaDrop from "./components/CaDrop";
import CategoryQuestionResult from "./components/CategoryQuestionResult";
import SubCategoryQuestionResult from "./components/SubCategoryQuestionResult";
import MyAnswer from "./components/MyAnswer";
import MyQuestion from "./components/MyQuestion";
import Profile from "./components/Profile";
// import Login from "./pages/simplerouter/login";
// import Home from "./pages/simplerouter/home";

export default function IRouter() {
	return (
		<Router>
			{/*普通方式，根据path匹配,但是App的内容会出现在Login上方 ->图1所示*/}
			{/*<Route path = "/" component={App}></Route>*/}
			{/*<Route path = "/login" component={Login}></Route>*/}
			{/*<Route path = "/home" component={Home}></Route>*/}

			{/*如果用swithc，浏览器输入/home也只会加载App页，因为/home先匹配了/*/}
			{/*加上 exact 可以精准匹配 ->图2所示*/}
			{/*如果导入的是HashRouter，会自动加上# 如 http://localhost:3000/login#/ ->图3所示*/}
			<Routes>
				<Route exact path="/" element={<App />}></Route>
				<Route exact path="/login" element={<App />}></Route>
				<Route exact path="/home" element={<Home />}></Route>
                <Route exact path="/regist" element={<Regist />}></Route>
				<Route exact path="/list/:id" element={<Answer />} ></Route>
                <Route exact path="/listRelated/:text" element={<SearchResult />} ></Route>
                <Route exact path="/listCategoryQuestion/:ctgyId" element={<CategoryQuestionResult />} ></Route>
                <Route exact path="/listSubCategoryQuestion/:ctgyId" element={<SubCategoryQuestionResult />} ></Route>
                <Route exact path="/myQuestion" element={<MyQuestion />}></Route>
                <Route exact path="/myAnswer" element={<MyAnswer />}></Route>
                <Route exact path="/profile" element={<Profile />}></Route>


                <Route exact path="/test" element={<Profile />}></Route>
			</Routes>
		</Router>
	);
}
