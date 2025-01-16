export const media = {
  /**
   * @example
   * import { media } from '@style/media';
   *
   * ${media.mobile} {
   *   padding: 3px;
   * }
   */
  desktop: '@media (min-width: 1280px)',
  tablet: '@media (min-width: 768px) and (max-width: 1279px)',
  mobile: '@media (max-width: 767px)',
};
