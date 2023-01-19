/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NoMatch from '../src/components/NoMatch';

describe('Components render correctly', () => {
  it('NoMatch component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <NoMatch />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
