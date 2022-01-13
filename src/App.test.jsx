import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('Check App renders or not', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
