import { useState } from 'react';

const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

function toRgb(hex: string): string {
  const value = Number.parseInt(hex.slice(1), 16);
  return `rgb(${value >> 16}, ${(value >> 8) & 255}, ${value & 255})`;
}

export default function App() {
  const [hex, setHex] = useState('#9921ff');
  const complete = hex.length === 7;
  const valid = complete && HEX_COLOR.test(hex);
  const background = valid ? hex : complete ? '#c84545' : '#777777';

  return (
    <main className="app" style={{ backgroundColor: background }}>
      <label className="converter">
        <span className="sr-only">Цвет в формате HEX</span>
        <input
          aria-label="Цвет в формате HEX"
          className="input-field"
          maxLength={7}
          value={hex}
          onChange={(event) => setHex(event.target.value)}
          placeholder="#000000"
        />
        <span className={`result ${complete && !valid ? 'error' : ''}`} aria-live="polite">
          {!complete ? 'Введите 7 символов' : valid ? toRgb(hex) : 'Ошибка!'}
        </span>
      </label>
    </main>
  );
}
