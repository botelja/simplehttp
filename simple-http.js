function SimpleHttp() {
  this.request = new XMLHttpRequest();
}

//GET Request
SimpleHttp.prototype.get = function(url, callback) {
  this.request.open('GET', url, true);
  const self = this;
  this.request.onload = function() {
    if (self.request.status === 200) {
      callback(null, self.request.responseText);
    } else {
      callback('Error: ' + self.request.status);
    }
  };

  this.request.send();
};

//POST Request
SimpleHttp.prototype.post = function(url, data, callback) {
  this.request.open('POST', url, true);
  this.request.setRequestHeader('Content-type', 'application/json');

  const self = this;
  this.request.onload = function() {
    callback(null, self.request.responseText);
  };

  this.request.send(JSON.stringify(data));
};

//PUT Request
SimpleHttp.prototype.put = function(url, data, callback) {
  this.request.open('PUT', url, true);
  this.request.setRequestHeader('Content-type', 'application/json');

  const self = this;
  this.request.onload = function() {
    callback(null, self.request.responseText);
  };

  this.request.send(JSON.stringify(data));
};

//DELETE Request
SimpleHttp.prototype.delete = function(url, callback) {
  this.request.open('DELETE', url, true);

  const self = this;
  this.request.onload = function() {
    if (self.request.status === 200) {
      callback(null, 'Deleted');
    } else {
      callback('Error: ' + self.request.status);
    }
  };

  this.request.send();
};
