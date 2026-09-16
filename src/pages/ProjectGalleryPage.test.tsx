import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectGalleryPage from './ProjectGalleryPage';

describe('ProjectGalleryPage', () => {
  it('renders live demos and source links from the project catalog', () => {
    render(<ProjectGalleryPage />);

    expect(screen.getByRole('heading', { name: /project gallery/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /portfolio site/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view live demo/i })).toHaveAttribute(
      'href',
      'https://danny-huasco.github.io/'
    );
    expect(screen.getByRole('link', { name: /view source/i })).toHaveAttribute(
      'href',
      'https://github.com/danny-huasco/danny-huasco.github.io'
    );
  });

  it('shows a status without rendering unavailable demo actions', () => {
    render(<ProjectGalleryPage />);

    expect(screen.getByRole('heading', { name: /project demo/i })).toBeInTheDocument();
    expect(screen.getByText(/demo coming soon/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /view live demo/i })).toHaveLength(1);
  });
});