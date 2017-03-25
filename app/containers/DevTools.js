import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import Inspector from 'redux-devtools-inspector'

export default createDevTools(
  <DockMonitor
   toggleVisibilityKey='ctrl-h'
   changePositionKey='ctrl-q'
  >
    <LogMonitor />
  </DockMonitor>
)

/*
 * redux 生态系统
 * http://cn.redux.js.org/docs/introduction/Ecosystem.html
 * 
 */