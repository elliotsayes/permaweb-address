#!/usr/bin/env node

require('arweave').init({}).wallets.getAddress(JSON.parse(require('node:fs').readFileSync(require('node:process').argv[2], 'utf8'))).then(console.log.bind(console))