import { render, screen } from '@testing-library/react';
import App from './App';
import Profiles from './Profiles';
import PointGuards from './PointGuards';
import ShootingGuards from './ShootingGuards';
import Navigation from './Navigation';

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/NBA Profiles/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders alt text for img', () => {
  render(<App />);
  const textElement = screen.getByAltText(/linda barret avatar/i);
  expect(textElement).toBeInTheDocument();
});

test('renders ', () => {
  render(<PointGuards />);
  const textElement = screen.queryByAltText(/Placeholder image/i);
  expect(textElement).toBeInTheDocument();
});

test('renders profile button', () => {
  render(<PointGuards />);
  const buttonElement = screen.getByText(/See Full Profile/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders alt text for img', () => {
  render(<PointGuards />);
  const textElement = screen.getByAltText(/Placeholder image/i);
  expect(textElement).toBeInTheDocument();
});
