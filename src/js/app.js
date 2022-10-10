export default class NewCell {
  constructor() {
    this.playing = true;
    this.activecell = 1;
  }

  getCell(index) {
    return document.getElementById(`cell${index}`);
  }

  deactivateCell(index) {
    this.getCell(index).classList = 'cell';
  }

  activatecell(index) {
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
