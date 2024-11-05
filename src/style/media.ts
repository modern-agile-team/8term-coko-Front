export const media = {
  /**
   * @example
   * ${({ theme }) => theme.media.desktop} {
   *   padding: 3px;
   * }
   */
  media: {
    desktop: '@media (min-width: 1280px)',
    tablet: '@media (min-width: 768) and (max-width: 1279px)',
    mobile: '@media (max-width: 767px)',
  },
};
