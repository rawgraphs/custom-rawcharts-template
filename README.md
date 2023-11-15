# RAWGraphs Custom Chart template

This template allows you to create and utilize your own custom chart within the RAWGraphs interface. Custom charts are stored locally on your machine but can be shared with others by downloading the `.rawgraphs` project file and sending it to them.

Within a custom chart, you have the ability to define the chart variables and visual options that you wish to expose. By defining a JavaScript function and utilizing these inputs, you can generate a chart. Charts can be generated as SVG, canvas, or HTML nodes.

When you load the custom chart in RAWGraphs, the necessary interface components will be automatically generated based on your chart specifications.

Outlined below are the fundamental operations you can perform to initiate a new project.

For more detailed instructions on building custom charts, read the following documentation:

* [Create your first chart](docs/add-a-new-chart.md)
* [Good practices and conventions](docs/good-practices.md)
* [RAWgraphs core library technical documentation](https://rawgraphs.github.io/rawgraphs-core/docs/)

## Install

To create a custom chart you'll need [node.js](https://nodejs.org/en) installed on your computer.

In terminal navigate the folder in wich you cloned this template and run:

```sh
npm install
```

## Run Sandbox

While developing your custom chart, you can see it in realtime by running the sandbox environment.

In terminal navigate the folder in wich you cloned this template and run:

```sh
npm run sandbox
```

You can find your charts at [http://localhost:9000](http://localhost:9000)

## Build

When you are satisfied with your project, you can build the js bundle to be used in the RAWGraphs interface.

In terminal navigate the folder in wich you cloned this template and run:

```sh
npm run build
```

This will generate a folder named `lib` in which you will find three files.

The one named `index.umd.js` is the bundle that can be loaded by RAWGraphs. You cna rename it as you prefer.