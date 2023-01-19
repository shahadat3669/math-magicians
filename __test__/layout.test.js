/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Layout from '../src/components/Layout';

describe('Components render correctly', () => {
  it('Layout component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
