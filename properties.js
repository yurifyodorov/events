function target(event) {
  alert(event.target.nodeName);
}

function currentTarget(event) {
  alert(event.currentTarget.nodeName);
}
