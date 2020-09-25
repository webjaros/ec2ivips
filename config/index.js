const rc         = require('rc');
const parameters = require('./parameters.json');

/**
 * @returns {{
 *      aws: {
 *          serviceId: string,
 *          account: number,
 *          region: string,
 *          dynamodb: {
 *              authorization: {
 *                  name: string,
 *                  capacity: {
 *                      read: number,
 *                      write: number
 *                  }
 *              },
 *              auto: {
 *                  name: string,
 *                  capacity: {
 *                      read: number,
 *                      write: number
 *                  }
 *              },
 *              data: {
 *                  name: string,
 *                  capacity: {
 *                      read: number,
 *                      write: number
 *                  }
 *              },
 *              translation: {
 *                  name: string,
 *                  capacity: {
 *                      read: number,
 *                      write: number
 *                  }
 *              }
 *          },
 *          lambda: {
 *              getAuthorizationToken: {
 *                  rate: string,
 *                  enabled: boolean
 *              },
 *              getStockAuto: {
 *                  rate: string,
 *                  enabled: boolean
 *              },
 *              getTranslations: {
 *                  rate: string,
 *                  enabled: boolean
 *              }
 *          }
 *      },
 *      userId: string,
 *      auth: {
 *          username: string,
 *          password: string
 *      },
 *      endpoint: {
 *          auto: string,
 *          authenticate: string,
 *          getAuthorizationToken: string,
 *          getUserData: string,
 *          contact: string,
 *          search: string,
 *          translations: string
 *      }
 * }}
 */
module.exports = () => rc('app', parameters);
