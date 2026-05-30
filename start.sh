#!/bin/bash
cd "$(dirname "$0")"
export PORT=3010
export NODE_ENV=production
npx next start -p 3010
