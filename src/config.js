/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

export const auth = {

  jwt: { id: '433437658657-td22a5jg8e4omotr2u8mf3fgf7taprdc.apps.googleusercontent.com', secret: 'jtjREsYh-T3dgMAFv2ngLJLs' },
  
  // https://cloud.google.com/console/project
  google: {
    id: '433437658657-td22a5jg8e4omotr2u8mf3fgf7taprdc.apps.googleusercontent.com',
    secret: 'jtjREsYh-T3dgMAFv2ngLJLs'
  },

 
};
