import React from 'react';

const headComponents = [
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,700&display=swap"
    key="1"
    rel="stylesheet"
  />,
  <link
    href="//db.onlinewebfonts.com/c/561f38b1f4570de0fb8a39d691ab058c?family=Tungsten+Bold"
    key="2"
    rel="stylesheet"
    type="text/css"
  />,
];

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents);
};
