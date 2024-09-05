import {atom} from 'recoil';

export const LoginCheck= atom({
    key:"LoginCheck",
    default: (localStorage.getItem('userId') ? true : false)
})

export const intervalIdAtom = atom({
    key: "intervalIdAtom",
    default: null,
  });

  export const locationAtom = atom({
    key: "locationAtom",
    default: {
      latitude: null,
      longitude: null
    },
  });