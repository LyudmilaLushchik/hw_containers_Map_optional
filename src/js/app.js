export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  getSettings() {
    const mergedSettings = new Map([...this.defaultSettings, ...this.userSettings]);
    return mergedSettings;
  }

  setSetting(name, value) {
    const allValues = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };
    if (this.defaultSettings.has(name) && allValues[name].includes(value)) {
      this.userSettings.set(name, value);
    } else {
      throw new Error(`Invalid setting name ${name} or value ${value}`);
    }
  }
}
