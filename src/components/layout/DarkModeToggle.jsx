import { useEffect, useState } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

function DarkModeToggle() {
  const [setTheme, colorTheme] = useDarkMode();
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    const toggle = document.getElementsByClassName('toggle')[0];
    if (!isChecked) {
      toggle.addAttribute('checked');
    } else {
      toggle.removeAttribute('checked');
    }
  }, [isChecked]);

  return (
    <div className="flex items-center">
      <FaRegMoon className="mx-4 text-xl" />
      <input
        type="checkbox"
        className="toggle"
        checked
        onClick={event => {
          setIsChecked(
            event.currentTarget.checked === 'true' ? 'false' : 'true'
          );
          setTheme(colorTheme);
        }}
      />
    </div>
  );
}

export default DarkModeToggle;
