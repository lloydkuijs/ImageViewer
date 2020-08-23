class Image {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

const images = [
  new Image("mountains", "https://i.imgur.com/2F3Al82.jpg"),
  new Image("Feathers", "https://i.imgur.com/5WtHh22.jpg"),
  new Image("Up", "https://i.imgur.com/WihWyER.jpg"),
  new Image("Japanese", "https://i.imgur.com/QL1M4yG.jpg"),
];

export { images }; // Not needed for * imports, I know 😒
