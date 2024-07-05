import React, { useState } from 'react';
import { Button } from '@/components/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/dropdown-menu';
import { backgroundChange } from '../app/store/ColorChange_';
import { useSetRecoilState } from 'recoil';

const Appearance = () => {
    const setBackgroundColor = useSetRecoilState(backgroundChange);
    const [position, setPosition] = useState('Light');

    const handleColorChange = (backgroundColor, color) => {
        setBackgroundColor({ backgroundColor, color });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10rem' }}>
            <div style={{ width: '5rem' }}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" style={{ border: '1px solid blue' }}>Appearance</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-70">
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem value="Light" onClick={() => handleColorChange('#eeeeee', '#444444')}>Light</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Dark" onClick={() => handleColorChange('#121212', '#fffefc')}>Dark</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Appearance;
