import Settings from '../app';

describe('Settings', () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  test('should return default settings if no user settings are set', () => {
    const expected = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    expect(settings.getSettings()).toEqual(expected);
  });

  test('should return merged settings if user settings are set', () => {
    settings.setSetting('theme', 'light');
    const expected = new Map([
      ['theme', 'light'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    expect(settings.getSettings()).toEqual(expected);
  });

  test('should throw an error for invalid settings', () => {
    expect(() => settings.setSetting('theme', 'invalid')).toThrow();
    expect(() => settings.setSetting('music', 'invalid')).toThrow();
  });
});
