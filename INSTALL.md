# How to install

 1. Install the environment

        npm install

 2. Download the background image from Unsplash (see `pages/index.js`)

# How to deploy

## Development

 1. Run the live development server

        npm run dev

## Production

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
