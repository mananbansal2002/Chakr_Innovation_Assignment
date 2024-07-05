"use client"

import "./globals.css";
import {backgroundColorSelector,ColorSelector} from './store/ColorChange';
import {useRecoilValue} from 'recoil';
import {RecoilRoot} from 'recoil'

const Body=({children}:{children:React.ReactNode})=>{
  const backgroundTheme=useRecoilValue(backgroundColorSelector);
  const colorTheme=useRecoilValue(ColorSelector);
  return  <body style={{backgroundColor:`${backgroundTheme}`,color:`${colorTheme}`}}>{children}</body>
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <RecoilRoot>
    <html lang="en">
      <title> Chakr Inoovaion FrontEnd Assignment- Manan</title>
      <Body>{children}</Body>
    </html>
    </RecoilRoot>
  );
}
