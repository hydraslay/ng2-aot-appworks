import { AtosamplePage } from './app.po';

describe('atosample App', () => {
  let page: AtosamplePage;

  beforeEach(() => {
    page = new AtosamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
