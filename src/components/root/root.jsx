import React from 'react';
import { configure} from 'mobx';
import { StoresProvider } from 'infrastructure/context-stores';
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from 'components/layout';

configure({ enforceActions: 'observed' });

export const Root = () =>
  <Router basename='/'>
    <StoresProvider>
      <Layout />
    </StoresProvider>
  </Router>;
