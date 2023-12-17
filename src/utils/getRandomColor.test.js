import getRandomColor from './getRandomColor';

describe('getRandomColor', () => {
  test('returns a valid hex color string', () => {
    const color = getRandomColor();
    expect(color).toMatch(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
  });

  test('generates different colors', () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    expect(color1).not.toEqual(color2);
  });
});
