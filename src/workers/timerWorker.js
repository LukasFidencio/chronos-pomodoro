self.onmessage = function(event) {
  console.log ('WORKER recebeu:', event.data);

  self.postMessage('ola pra vc tambem');
}