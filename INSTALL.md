# How to install

## Dev

    npm run dev

## Prod

 1. Export the website

        npm run build
        cp .htaccess out/

 2. Remove useless JavaScript

        rimraf out/_next
        tidy out/index.hml
        # remove JS preload & scripts

 3. Add [Google Analytics](https://analytics.google.com/analytics/web/)

 4. Deploy

        mv out joanrieu
        lftp ...
            cd ...
            mirror -R joanrieu
