function onClick(event) {
  console.log(event.type);
  const eventType = event.type;

  setTimeout(function() {
    console.log(event.type);
    console.log(eventType);
  }, 0);
}