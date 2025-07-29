const cart = ["shoes", "pants", "kurtas"];

api.createOrder(cart, function () {

  api.proceedToPayment(function () {

    api.showOrderSummary(function () {
        
      api.updateWallet();
    });
  });
});
