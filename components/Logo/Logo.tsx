import classNames from 'classnames';
import React, { FC } from 'react';
import Link from 'next/link';

import { LogoProps } from '@/types';
import data from '@/data/common.json';
import logoIconsMap from '@/data/logoIconsMap';

export const Logo: FC<LogoProps> = ({
  href = '/',
  className,
  position = 'header',
  onClick,
}) => {
  const logoClasses = classNames('inline-block', {
    'h-[41px] w-14 md:h-[47px] md:w-[65px] xl:h-[58px] xl:w-20 xxl:h-[74px] xxl:w-[103px]':
      position === 'header',
    'h-[102px] w-[140px] md:h-[74px] md:w-[102px] xl:h-[102px] xl:w-[140px] xxl:h-[137px] xxl:w-[188px]':
      position === 'footer',
    ' h-[42px] w-[57px] xl:hidden': position === 'mobile-menu',
  });

  const LogoIcon = logoIconsMap[position];

  return (
    <Link
      href={href}
      className={`${logoClasses} ${className}`}
      aria-label={data.logoAriaLabel}
    >
      <LogoIcon id={`logo-${position}`} onClick={onClick} />
    </Link>
  );
};
