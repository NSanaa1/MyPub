import { MyPubPage } from './app.po';

describe('my-pub App', function() {
  let page: MyPubPage;

  beforeEach(() => {
    page = new MyPubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
