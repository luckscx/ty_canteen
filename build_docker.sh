#! /bin/bash
SHELL_FOLDER=$(cd "$(dirname "$0")";pwd)
cd "$SHELL_FOLDER"

set -x -e -u -o pipefail

docker build -t ty_canteen .




