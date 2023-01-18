import React from 'react';
import renderer from 'react-test-renderer';

import ButtonGrid from '../src/components/ButtonGrid';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<ButtonGrid />).toJSON();
  expect(tree).toMatchSnapshot();
});
