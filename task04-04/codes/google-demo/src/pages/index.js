import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UsrContent from '../components/usrContent'
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   <div id="ntp-contents">
  <div id="logo">
    {/* The logo that is displayed in the absence of a doodle. */}
    <div id="logo-default" title="Google" className="show-logo" />
    {/* Logo displayed when theme prevents doodles. Doesn't fade. */}
    <div id="logo-non-white" title="Google" />
    {/* A doodle, if any: its link and image. */}
    <div id="logo-doodle">
      <div id="logo-doodle-container">
        <div id="logo-doodle-wrapper">
          <button id="logo-doodle-button">
            <img id="logo-doodle-image" tabIndex={-1} />
          </button>
        </div>
      </div>
      <iframe id="logo-doodle-iframe" scrolling="no" />
    </div>
  </div>
  <div id="realbox-container">
    <div id="realbox-input-wrapper">
      <div id="realbox-icon" data-default-icon="search.svg" data-icon="search.svg" style={{WebkitMaskImage: 'url("search.svg")'}}>
      </div>
      <input id="realbox" type="search" autoComplete="off" spellCheck="false" aria-live="polite" autoFocus placeholder="在 Google 上搜索，或者输入一个网址" />
      <button id="realbox-microphone" className="microphone-icon" title="语音搜索" />
      <div id="realbox-matches" />
    </div>
  </div>
  <div id="user-content">
    {/* Search suggestions will be inserted here. */}
    <div id="most-visited">
      {/* The container for the tiles. The MV iframe goes in here. */}
      <div id="mv-tiles">
      <UsrContent/>
      </div>
    </div>
  </div>
  {/* Notification shown when the tiles are modified. */}
  <div id="mv-notice-container">
    <div id="mv-notice" className="notice-hide" role="alert">
      <span id="mv-msg">已移除快捷方式</span>
      {/* Links in the notification. */}
      <span id="mv-notice-links">
        <span id="mv-undo" className="ripple" tabIndex={0} role="button">撤消</span>
        <span id="mv-restore" className="ripple" tabIndex={0} role="button" />
      </span>
    </div>
  </div>
  <div id="attribution" style={{display: 'none'}}><div id="attribution-text">主题背景创建者：</div></div>
  <div id="error-notice-container">
    <div id="error-notice" className="notice-hide" role="alert">
      <span id="error-notice-icon" />
      <span id="error-notice-msg" />
      <span id="error-notice-link" className="ripple" tabIndex={0} role="button" />
    </div>
  </div>
  <div id="edit-bg" tabIndex={0} role="button" className="ep-enhanced" aria-label="自定义此页" title="自定义此页">
    <div id="edit-bg-icon" />
    <span id="edit-bg-text">自定义</span>
  </div>
  <div id="custom-bg-attr" />
</div>

  </Layout>
)

export default IndexPage
