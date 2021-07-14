"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var Header_module_css_1 = require("./Header.module.css");
function Header() {
    return (React.createElement("header", { className: Header_module_css_1["default"].container },
        React.createElement("ul", { className: Header_module_css_1["default"].list },
            React.createElement("li", { className: Header_module_css_1["default"].item },
                React.createElement(link_1["default"], { href: "/" },
                    React.createElement("a", null, " Home "))),
            React.createElement("li", { className: Header_module_css_1["default"].item },
                React.createElement(link_1["default"], { href: "/blog" },
                    React.createElement("a", null, " Blog "))),
            React.createElement("li", { className: Header_module_css_1["default"].item },
                React.createElement(link_1["default"], { href: "/users" },
                    React.createElement("a", null, " Users "))))));
}
exports["default"] = Header;
