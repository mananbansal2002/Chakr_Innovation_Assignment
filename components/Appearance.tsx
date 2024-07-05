import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { backgroundChange } from '../app/store/ColorChange_';
import { Circle } from 'lucide-react'; // Assuming 'Circle' is your icon component

const Appearance = () => {
    const setBackgroundColor = useSetRecoilState(backgroundChange);
    const [theme, setTheme] = useState('Light');

    const handleColorChange = (backgroundColor, color, newTheme) => {
        setBackgroundColor({ backgroundColor, color });
        setTheme(newTheme);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <div
                    className={`flex items-center justify-center rounded-full h-10 w-10 cursor-pointer bg-white text-black ${
                        theme === 'Light' ? 'border-2 border-blue-500' : 'border-2 border-transparent'
                    }`}
                    onClick={() => handleColorChange('#eeeeee', '#444444', 'Light')}
                >
                   
                </div>
                <div
                    className={`flex items-center justify-center rounded-full h-10 w-10 cursor-pointer bg-black text-white ${
                        theme === 'Dark' ? 'border-2 border-blue-500' : 'border-2 border-transparent'
                    }`}
                    onClick={() => handleColorChange('#121212', '#fffefc', 'Dark')}
                >
                   
                </div>
            </div>
        </div>
    );
};

export default Appearance;
