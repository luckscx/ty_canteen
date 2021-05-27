#! /bin/bash
SHELL_FOLDER=$(cd "$(dirname "$0")";pwd)
cd "$SHELL_FOLDER"

set -x -e -u -o pipefail

pm2 kill

pm2 start pm2.config.js




