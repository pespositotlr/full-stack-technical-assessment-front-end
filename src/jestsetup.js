import React, { Component } from 'react';
global.React = React;
global.Component = Component;

import App from './containers/App.js';
global.App = App;

import Home from './components/Home/Home.js';
global.Home = Home;

// Make Enzyme functions available in all test files without importing
import { shallow, render, mount } from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Skip createElement warnings but fail tests on any other warning
console.error = message => {
    if (!/(React.createElement: type should not be null)/.test(message)) {
        throw new Error(message);
    }
};