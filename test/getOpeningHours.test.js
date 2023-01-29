const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se a função existe', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Verifica os retornos da função', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
    expect(getOpeningHours('sunday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(() => getOpeningHours('Thu', '05:00-PM')).toThrow(/^The day must be valid\. Example: Monday$/);
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(new Error('The hour should represent a number'));
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(new Error('The minutes should represent a number'));
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});
