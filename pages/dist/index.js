"use strict";
exports.__esModule = true;
var Header_1 = require("../component/Header");
var Footer_1 = require("../component/Footer");
var Home_module_css_1 = require("../styles/Home.module.css");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], null),
        React.createElement("h1", { className: Home_module_css_1["default"]['title-homepage'] }, "Welcome TECHNODEV"),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
