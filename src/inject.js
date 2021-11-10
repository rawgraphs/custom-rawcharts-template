import { default as hellochart } from './hellochart'

const injectHook = window.RAWGRAPH_APP_INJECT_HOOK || []
injectHook.push(hellochart)
