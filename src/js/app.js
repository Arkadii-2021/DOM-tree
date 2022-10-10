export default class NewCell {
  constructor() {
    this.playing = true;
    this.activecell = 1;
  }

  static getCell(index) {
    return document.getElementById(`cell${index}`);
  }

  static deactivateCell(index) {
    this.getCell(index).classList = 'cell';
  }

  static activatecell(index) {
    this.getCell(index).classList.toggle('cell_has-goblin');
  }

  nextCell() {
    const next = () => setTimeout(() => {
      this.deactivateCell(this.activecell);
      this.activecell = Math.floor(1 + Math.random() * 9);
      this.activatecell(this.activecell);
      next();
    }, 1200);
    next();
  }
}
