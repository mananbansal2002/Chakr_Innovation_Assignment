
import {atom} from 'recoil';
import {recoilPersist} from  'recoil-persist';

const {persistAtom}=recoilPersist();

export const backgroundChange=atom({
    key:'backgroundChangeAtom',
    default:{
        backgroundColor:'#fffefc',
        color:"#000000"
    },
    effects_UNSTABLE:[persistAtom]
})

