import { iconsSet as icons } from './icons';

export default (ctx, inject) => {
  // don't know how to inject icons to $nuxt.$options
  ctx.icons = icons;
  inject('icons', icons);
};
