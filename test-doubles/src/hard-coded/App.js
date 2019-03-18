class FooBar {
  searchBar(req, callBackFunction) {
    // simulate heavy duty computation to find a bar
    setTimeout(() => {
      callBackFunction(null, {name: "Static Void Bar", searchTerm: req.query.term});
    }, 300);
  }
}

module.exports = FooBar;