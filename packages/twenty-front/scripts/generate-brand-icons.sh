#!/usr/bin/env bash
# Regenerates every PWA/favicon PNG from a square master PNG (>= 1024px), keeping each file's size.
# Requires ImageMagick (convert + identify).
set -euo pipefail

cd "$(dirname "$0")/.."
SOURCE_LOGO="public/images/brand/logo-1024.png"

find public/images/icons -name '*.png' | while read -r icon; do
  size=$(identify -format '%wx%h' "$icon")
  convert -background none "$SOURCE_LOGO" \
    -resize "$size" -gravity center -extent "$size" "$icon"
done

convert -background none "$SOURCE_LOGO" -resize 150x150 \
  public/images/brand/logo-150.png

echo "Brand icons regenerated from $SOURCE_LOGO"
