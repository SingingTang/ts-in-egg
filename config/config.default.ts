/* eslint valid-jsdoc: "off" */


import { EggAppConfig, EggAppInfo } from 'egg';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
export default (appInfo: EggAppInfo) : Partial<EggAppConfig> => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/

  return {
    keys: appInfo.name + '_1653122730036_8625',
    middleware: [],
    multipart: {},
  };
};
