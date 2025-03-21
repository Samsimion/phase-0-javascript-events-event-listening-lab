const btn = document.getElementById('button');
function addingEventListener() {
    btn.addEventListener('click', () => alert('i\'ve been clicked'));

}
addingEventListener();

/*describe("index.js", () => {
  let input;

  beforeEach(function() {
    input = document.getElementById('button');
    sinon.spy(input, 'addEventListener');
  })

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  })
})
 */
