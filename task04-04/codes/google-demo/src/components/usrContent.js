import React from 'react'
import Image from './image'

export default function usrContent() {
  return (
   <div id="most-visited">
   <div id="mv-tiles" style={{width: 560, opacity: 1}}>
   <div className="grid-tile-container" rid={1} add="false" index={0} style={{transform: 'translate(0px, 0px)'}}>
   <div className="grid-tile" draggable="true">
   <a className="md-tile" data-rid={1} data-pos={0} href="https://github.com/yanue/V2rayU" aria-label="GitHub" title="GitHub" draggable="false">
   <div className="md-tile-inner">
   <Image className="md-icon" title='true' alt='true' />
   <div className="md-title" style={{direction: 'ltr'}}>
   <span>GitHub</span>
   </div>
   </div>
   <button className="md-menu md-edit-menu" title="修改快捷方式" aria-label="修改快捷方式 GitHub" />
   </a>
   </div>
   </div>
   <div className="grid-tile-container" rid={9} add="false" index={8} style={{transform: 'translate(336px, 128px)', display: 'block'}}><div className="grid-tile" draggable="true"><a className="md-tile" data-rid={9} data-pos={8} href="https://chrome.google.com/webstore?hl=zh-CN" aria-label="Chrome 网上应用店" title="Chrome 网上应用店" draggable="false"><div className="md-tile-inner"><img className="md-icon" title='true' alt='true' src="chrome-search://ntpicon/?size=24%402x&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%3Fhl%3Dzh-CN" /><div className="md-title" style={{direction: 'ltr'}}><span>Chrome 网上应用店</span></div></div><button className="md-menu md-edit-menu" title="修改快捷方式" aria-label="修改快捷方式 Chrome 网上应用店" /></a></div></div><div className="grid-tile-container" rid={-1} add="true" style={{transform: 'translate(448px, 128px)', display: 'block'}}><div className="grid-tile"><a className="md-tile" data-rid={-1} data-pos={9} aria-label="添加快捷方式" title="添加快捷方式" tabIndex={0}><div className="md-tile-inner"><div className="md-icon md-add-icon" /><div className="md-title" style={{direction: 'ltr'}}><span>添加快捷方式</span></div></div></a></div></div></div></div>

  )
}
