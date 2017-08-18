import { SbAngularAppClientPage } from './app.po';

describe('sb-angular-app-client App', () => {
  let page: SbAngularAppClientPage;

  beforeEach(() => {
    page = new SbAngularAppClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
