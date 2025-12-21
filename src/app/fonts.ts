import localFont from 'next/font/local';

export const velaSans = localFont({
  src: [
    {
      path: '../../public/fonts/VelaSans/VelaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/VelaSans/VelaSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/VelaSans/VelaSans-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});