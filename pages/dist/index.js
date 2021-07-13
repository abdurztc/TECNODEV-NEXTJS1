exports.__esModule = true;
const link_1 = require('next/link');

function Home() {
  return (React.createElement(React.Fragment, null,
    React.createElement('header', null,
      React.createElement('ul', null,
        React.createElement('li', null,
          React.createElement(link_1.default, { href: '/' },
            React.createElement('a', null, ' Home '))),
        React.createElement('li', null,
          React.createElement(link_1.default, { href: '/blog' },
            React.createElement('a', null, ' Blog '))),
        React.createElement('li', null,
          React.createElement(link_1.default, { href: '/users' },
            React.createElement('a', null, ' Users '))))),
    React.createElement('h1', null, 'Welcome TECHNODEV')));
}
exports.default = Home;
