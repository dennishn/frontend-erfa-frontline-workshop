import React from "react";
import {withKnobs, select} from '@storybook/addon-knobs';

import '../../styles/styles.scss';

import Heading from "./heading";

import colorTokens from "../../design-tokens/colors";

export default {
    title: 'Heading',
    decorators: [withKnobs]
};

export const asH1 = () => <Heading as="h1">This is a H1 heading</Heading>;

export const asH2 = () => <Heading as="h2">This is a H2 heading</Heading>;

export const asH3 = () => <Heading as="h3">This is a H3 heading</Heading>;

export const asH4 = () => <Heading as="h4">This is a H4 heading</Heading>;

export const asH5 = () => <Heading as="h5">This is a H5 heading</Heading>;

export const asH6 = () => <Heading as="h6">This is a H6 heading</Heading>;

export const asDefault = () => <Heading>This is a default (H6) heading</Heading>;

export const tintGray = () => <Heading tint="gray">This is a gray heading</Heading>;
export const tintRed = () => <Heading tint="red">This is a red heading</Heading>;
export const tintPink = () => <Heading tint="pink">This is a pink heading</Heading>;
export const tintGrape = () => <Heading tint="grape">This is a grape heading</Heading>;
export const tintViolet = () => <Heading tint="violet">This is a violet heading</Heading>;
export const tintIndigo = () => <Heading tint="indigo">This is a indigo heading</Heading>;
export const tintBlue = () => <Heading tint="blue">This is a blue heading</Heading>;
export const tintCyan = () => <Heading tint="cyan">This is a cyan heading</Heading>;
export const tintTeal = () => <Heading tint="teal">This is a teal heading</Heading>;
export const tintGreen = () => <Heading tint="green">This is a green heading</Heading>;
export const tintLime = () => <Heading tint="lime">This is a lime heading</Heading>;

export const knobs = () => {
    const asValues = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    const tintValues = Object.keys(colorTokens.colors).map(key => key);

    const defaultAsValue = 'h1';
    const defaultTintValue = 'gray';

    const as = select('As', asValues, defaultAsValue);
    const tint = select('Tint', tintValues, defaultTintValue);

    return <Heading as={as} tint={tint}>Lorem ipsum dolor sit amet, consectetur adipisicing.</Heading>
}
