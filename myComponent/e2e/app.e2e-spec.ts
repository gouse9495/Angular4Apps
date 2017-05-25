import { MyComponentPage } from './app.po';

describe('my-component App', () => {
  let page: MyComponentPage;

  beforeEach(() => {
    page = new MyComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
