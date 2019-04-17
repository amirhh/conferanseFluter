// menu
export const MENU_OPEN = 'MENU_OPEN';
export const MENU_CLOSE = 'MENU_CLOSE';

export const openMenu = () => ({
  type: MENU_OPEN,
});

export const closeMenu = () => ({
  type: MENU_CLOSE,
});

// search input
export const SEARCH_OPEN = 'SEARCH_OPEN';
export const SEARCH_CLOSE = 'SEARCH_CLOSE';

export const openSearch = () => ({
  type: SEARCH_OPEN,
});

export const closeSearch = () => ({
  type: SEARCH_CLOSE,
});

// device size 
export const DEVICE_RESIZE = 'DEVICE_RESIZE';
export const deviceSize = (width , height) => ({
  type : DEVICE_RESIZE,
  width,
  height
});

// navlink color
export const NAV_COLOR = 'NAV_COLOR';
export const changeNavLinkColor = (color , bg) => ({
  type : NAV_COLOR,
  color,
  bg
});