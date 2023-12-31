import classNames from 'classnames';

import React, { FC } from 'react';
import Link from 'next/link';

import { NavigationRowLinkProps } from '@/types';

export const NavigationRowLink: FC<NavigationRowLinkProps> = ({
  currentPath,
  href,
  position,
  title,
  onClick,
}) => {
  const navLinkClasses = classNames(
    ' inline-block text-base hover:text-primary-light-900 focus:text-primary-light-500 transition-colors duration-300 ',
    {
      'after:block after:mt-1 after:h-[2px] after:w-full after:bg-grad_100':
        currentPath === href && position === 'mobile-menu',
      'text-sm md:text-base': position === 'footer',
    },
  );

  return (
    <Link href={href} className={navLinkClasses}>
      <span onClick={onClick}>{title}</span>
    </Link>
  );
};
