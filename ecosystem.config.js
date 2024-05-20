module.exports = {
   apps: [
      {
         name: 'iHospital',
         exac_mode: 'cluster',
         instances: 'max',
         script: 'server.js',
         env: {
            NODE_ENV: 'production',
            PORT: 3000
         }
      }
   ]
};
