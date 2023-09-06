import React, { FC } from 'react';

import IconText from '../../public/icons/kidsMafia/text.svg';
import IconRule from '../../public/icons/kidsMafia/rule.svg';
import IconBehavior from '../../public/icons/kidsMafia/behavior.svg';
import IconWallet from '../../public/icons/kidsMafia/wallet.svg';

interface ClubKidsMafiaCardProps {
  subtitle: string;
  text: string;
  iconDescr: string;
}

const ClubKidsMafiaCard: FC<ClubKidsMafiaCardProps> = ({
  subtitle,
  text,
  iconDescr,
}) => {
  return (
    <div className="mdOnly:base-[236px] min-h-[232px] rounded-md border border-solid border-[#49044D] bg-[#141318] p-6 md:p-5 xl:min-h-[208px] xl:basis-1/4 mdOnly:max-w-[236px]">
      <div className="mb-3">
        {iconDescr === 'text' && <IconText width={32} height={32} />}
        {iconDescr === 'rule' && <IconRule width={32} height={32} />}
        {iconDescr === 'behavior' && <IconBehavior width={32} height={32} />}
        {iconDescr === 'wallet' && <IconWallet width={32} height={32} />}
      </div>
      <h4 className="mb-4 text-xl font-medium">{subtitle}</h4>
      <p className="text-base smOnly:max-w-[287px]">{text}</p>
    </div>
  );
};

export default ClubKidsMafiaCard;
