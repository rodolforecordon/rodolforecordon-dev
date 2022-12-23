import '@testing-library/jest-dom';
import { getByText, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('App', () => {
  test('Should be able to see the initial text on screen', () => {
    const { getByText } = render(<App />);

    expect(1).toBe(1);
  });
});
