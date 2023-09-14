import {
  SCREEN_MOBILE,
  SCREEN_TABLET,
  SCREEN_DESKTOP,
  LARGE_SCREEN_DESKTOP,
} from '@/constants';

export const getSliderBreakpointsOptions = (
  section: 'school' | 'presenters' | 'corporate' | 'corporate-hero',
) => {
  if (section === 'school') {
    return {
      [SCREEN_MOBILE]: { slidesPerView: 1 },
      [SCREEN_TABLET]: { slidesPerView: 4, loopedSlides: 3 },
      [SCREEN_DESKTOP]: {
        slidesPerView: 5,
        loopedSlides: 3,
      },
      [LARGE_SCREEN_DESKTOP]: {
        slidesPerView: 4,
        loopedSlides: 3,
      },
    };
  }

  if (section === 'presenters') {
    return {
      [SCREEN_MOBILE]: { slidesPerView: 1 },
      [SCREEN_TABLET]: { slidesPerView: 2 },
      [SCREEN_DESKTOP]: {
        slidesPerView: 5,
        loopedSlides: 3,
      },
      [LARGE_SCREEN_DESKTOP]: {
        slidesPerView: 4,
        loopedSlides: 3,
      },
    };
  }

  if (section === 'corporate') {
    return {
      [SCREEN_MOBILE]: { slidesPerView: 1 },
      [SCREEN_TABLET]: { slidesPerView: 4, loopedSlides: 3 },
      [SCREEN_DESKTOP]: {
        slidesPerView: 5,
        loopedSlides: 3,
      },
      [LARGE_SCREEN_DESKTOP]: {
        slidesPerView: 4,
        loopedSlides: 3,
      },
    };
  }

  if (section === 'corporate-hero') {
    return {
      [SCREEN_MOBILE]: { slidesPerView: 1 },
      [SCREEN_TABLET]: { slidesPerView: 2 },
      [SCREEN_DESKTOP]: {
        slidesPerView: 5,
        loopedSlides: 3,
      },
      [LARGE_SCREEN_DESKTOP]: {
        slidesPerView: 4,
        loopedSlides: 3,
      },
    };
  }
};
