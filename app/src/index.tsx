import "@babel/polyfill";
import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { ApolloProvider } from "react-apollo";

import graphqlClient from "./api/graphql";
import { Root } from "./components/Root";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');

    body {
        font-family: Roboto, sans-serfif;
    }
    `;




render(
    <ApolloProvider client={graphqlClient}>
        <GlobalStyle />
        <Root />
    </ApolloProvider>,
    document.getElementById("app")
);