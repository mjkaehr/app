import { Post } from './post';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post("username","")).toBeTruthy();
  });
});
