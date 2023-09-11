import { HTMLAttributes } from 'react';

import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from 'react-hook-form';

export interface LogoProps {
  href: string;
  position: 'header' | 'footer' | 'mobile-menu';
  className?: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3';

type HeadingVariant = 'main' | 'primary' | 'secondary' | 'tertiary';

export interface HeadingElementProps {
  className?: string;
  shadow?: string;
  rest?: HTMLAttributes<HTMLHeadingElement>;
}

export interface HeadingComponentProps extends HeadingElementProps {
  tag?: HeadingTag;
  variant?: HeadingVariant;
  children: React.ReactNode;
}

type ParagraphVariant = 'normal' | 'large' | 'small';

export interface ParagraphProps {
  children: React.ReactNode;
  variant?: ParagraphVariant;
  className?: string;
}

export interface NavigationRowProps {
  position: 'header' | 'footer' | 'mobile-menu';
  className?: string;
}

export type SocialContact = {
  name: string;
  link: string;
  icon: string;
};

type SocialMenuVariants = 'fixed' | 'footer' | 'mobile-menu';

export interface SocialsMenuProps {
  variant?: SocialMenuVariants;
  className?: string;
}

export interface SocialButtonProps {
  link: string;
  aria_label: string;
  variant?: SocialMenuVariants;
  children: React.ReactNode;
  className?: string;
}

export interface SocialIconProps {
  icon: string;
  variant?: SocialMenuVariants;
  className?: string;
}

export interface ButtonPrimaryProps {
  buttonsize?: 'small' | 'medium' | 'large' | undefined;
  type?: 'button' | 'submit' | undefined;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children: string;
  actionHandler?: () => void;
}

export interface ButtonSecondaryProps {
  linkto: string;
  buttonsize?: 'medium' | 'large' | undefined;
  loading?: boolean;
  className?: string;
  children: string;
}

export type IconBtnName = 'cross' | 'arrow' | 'scroll';

export interface IconBtnProps {
  icon: IconBtnName;
  reverse?: boolean;
  onClick?: () => void;
  classes?: string;
}

export interface LearnListProps {
  className?: string;
}

export interface NavigationRowLinkProps {
  currentPath: string;
  href: string;
  position: string;
  title: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export interface LearnListItemProps {
  title: string;
  desc: string;
}

type ContactsVariants = 'footer' | 'mobile-menu';

export interface ContactsProps {
  variant?: ContactsVariants;
  className?: string;
}

export interface MafiaSchoolSectionData {
  type: 'heading' | 'paragraph' | 'image-main' | 'image-grid' | 'subtitle';
  level?: HeadingComponentProps['tag'];
  content?: string;
  variant?: HeadingComponentProps['variant'];
  src?: string;
  alt?: string;
  images?: {
    src: string;
    alt: string;
  }[];
}

export interface MafiaSchoolHeroData {
  sections: MafiaSchoolSectionData[];
}

export interface ClubKidsMafiaCardProps {
  subtitle: string;
  text: string;
  iconDescr: string;
}
interface IKidsMafiaCard {
  iconDescr: string;
  subtitle: string;
  text: string;
}

export interface KidsMafiaConditionsProps {
  conditions: { title: string; cards: IKidsMafiaCard[] };
  btn: string;
}

export interface ScheduleProps {
  className?: string;
}

export interface ScheduleItemProps {
  id: string;
  day: string;
  time_start: string;
  time_end: string;
}

export interface ScheduleDataType {
  schedule: {
    data: {
      attributes: {
        schedules: ScheduleItemProps[];
      };
    };
  };
}

export interface HallFameCup {
  title: string;
}

export interface HallFameCardProps {
  id?: string;
  name: string;
  description: string;
  cupstitle: string;
  cups: HallFameCup[];
  image: {
    src: string;
    alt: string;
  };
}
export interface HallFameCustomCardProps {
  id?: string;
  title?: string;
  src?: string;
  alt?: string;
}

// ---- FORM START ---

export type InputT = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  options: Record<string, RegisterOptions>;
};

export type TextAreaT = {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  options: Record<string, RegisterOptions>;
};

export interface TextAreaProps {
  textarea: TextAreaT;
  height: number;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export interface InputProps {
  input: InputT;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export interface FormProps {
  classes?: string;
}

// ---- FORM END ---

export interface FooterLinkItemProps {
  [any: string]: string;
  title: string;
  href: string;
}

export interface SliderProps {
  section: 'school' | 'presenters' | 'corporate';
  pagination?: boolean;
  autoplay?: boolean;
  className?: string;
}

export interface SliderNavigationProps {
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

interface SliderCard {
  id: number;
  imageUrl: string;
}

export interface SliderCardSchool extends SliderCard {
  name: string;
  alias: string;
}

export interface SliderCardCorporate extends SliderCard {
  altText: string;
}

export interface SliderImageProps {
  card: SliderCardSchool | SliderCardCorporate | PresenterItemProps;
  section: 'school' | 'presenters' | 'corporate';
}

export interface PresenterImageType {
  data: {
    id: string;
    attributes: { url: string };
  };
}

export interface PresenterItemProps {
  attributes: { name: string; description: string; img: PresenterImageType };
}

export interface PresentersDataType {
  presenters: {
    data: PresenterItemProps[];
  };
}
