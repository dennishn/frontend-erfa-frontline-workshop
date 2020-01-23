import React from "react";

import JpgImage from "../../assets/images/file.jpg";
import GifImage from "../../assets/images/file.gif";
import PngImage from "../../assets/images/file.png";
import SvgImage from "../../assets/images/file.svg";
import TinyPngImage from "../../assets/images/1kb.png";

const ImageList = () => (
    <div>
        <img src={JpgImage} alt="Jpg Image" />
        <img src={GifImage} alt="Gif Image" />
        <img src={PngImage} alt="Png Image" />
        <img src={SvgImage} alt="Svg Image" />
        <img src={TinyPngImage} alt="Tiny PNG" />
    </div>
);

export default ImageList;
