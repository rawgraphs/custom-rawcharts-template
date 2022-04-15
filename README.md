# Custom Raw Chart(s)

## Install

```sh
npm install
```

## Run Sandbox

Develop your custom chart on your machine with livereload thanks to Webpack.

```sh
npm run sandbox
```

You can find your charts at [http://localhost:9000](http://localhost:9000)

For an in depth guide to add a chart see [this](https://github.com/rawgraphs/rawgraphs-charts/blob/master/docs/add-a-new-chart.md)

## Build

Build your chart to use it in RAW.

```sh
npm run build
```

## Share

- Go to RAW [websiste](https://dev.rawgraphs.io)
- Click on "Add your chart!"
- Upload the UMD build you can find it under `lib/index.umd.js`
- Download the project (now the project contains also your chart)
- Upload `.rawgraphs` file to for example [Gist](https://gist.github.com) or other share file services
- Now you you can share your example and charts with your friend with: https://dev.rawgraphs.io?url=UPLOADED_URL
