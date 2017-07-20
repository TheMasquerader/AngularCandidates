import { OatmealAppPage } from './app.po';

describe('oatmeal-app App', () => {
  let page: OatmealAppPage;

  beforeEach(() => {
    page = new OatmealAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
