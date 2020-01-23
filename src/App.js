import React from 'react';

import {hot} from "react-hot-loader/root";

import Heading from "./components/heading/heading";
import Logo from "./components/logo/logo";
import ImageList from "./components/image-list/image-list";

function App() {
    return (
        <div>
            <Logo/>
            <ImageList/>
            <Heading as="h1" tint="indigo">Hello World</Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at cumque deserunt ea iusto provident quae sunt? Ab, ad animi cupiditate distinctio dolores et illo molestias nulla quaerat veritatis vero!</p>
            <i style={{fontSize: '24px'}} className="icon icon-alarm"/>
            <i style={{fontSize: '24px'}} className="icon icon-code"/>
        </div>
    );
}

export default hot(App);
