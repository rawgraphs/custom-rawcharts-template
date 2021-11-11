import { default as hellochart } from './hellochart'

const injectHook = self.RAWGRAPH_APP_INJECT_HOOK || []
injectHook.push(hellochart)
