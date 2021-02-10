import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <div id="one-google" className="show-element">
  <header className="gb_qa gb_Wa gb_Te gb_Sd" id="gb" role="banner" style={{backgroundColor: 'transparent'}}>


  <div className="gb_Ld gb_5d gb_Ud gb_Td gb_wc">
    <div className="gb_Kd gb_Zc">
      <div className="gb_vc gb_Ba" aria-expanded="false" aria-label="主菜单" role="button" tabIndex={0}>
        <svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
          </path>
        </svg>
      </div>
      <div className="gb_vc gb_yc gb_Ba" aria-label="返回" role="button" tabIndex={0}>
        <svg focusable="false" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
      </div>
      <div className="gb_vc gb_zc gb_Ba" aria-label="关闭" role="button" tabIndex={0}>
        <svg viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </div>
      <div className="gb_oc gb_Ba">
      <div className="gb_pc">
        <a className="gb_me gb_qc" aria-label="Google" href="/?tab=rr">
        <span className="gb_uc gb_je gb_Ba" aria-hidden="true" />
        </a>
      </div>
    </div>
    <div className="gb_Kd gb_Wc gb_Xc">
      <span className="gb_1c" aria-level={1} role="heading"> </span>
    </div>
  </div>
  <div className="gb_Kd gb_Xd gb_Td gb_Qe gb_Me" />
    <div className="gb_Zd gb_Ta gb_Kd" data-ogsr-up><div>
      <div className="gb_ae gb_i gb_xg gb_og" data-ogbl>
        <div className="gb_h gb_i">
          <a className="gb_g" data-pid={2} href="https://www.google.cn/imghp?hl=zh-CN&tab=ri&ogbl" target="_top">图片</a>
        </div>
      </div>
    </div>
    <div className="gb_Ue">
      <div className="gb_Pc">
        <div className="gb_C gb_dd gb_i gb_Mf" data-ogsr-fb="true" data-ogsr-alt id="gbwa">
          <div className="gb_Lf">
            <a className="gb_D" aria-label="Google 应用" href="https://www.google.cn/intl/zh-CN/about/products?tab=rh" aria-expanded="false" role="button" tabIndex={0}>
              <svg className="gb_Xe" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="gb_Oa gb_dd gb_xg gb_i gb_Mf">
        <div className="gb_Lf gb_Sa gb_xg gb_i">
          <a className="gb_D gb_Na gb_i" aria-label="Google 帐号： fei chen  (fei355148@gmail.com)" href="https://accounts.google.com/SignOutOptions?hl=zh-CN&continue=https://www.google.com%3Fhl%3Dzh-CN" role="button" tabIndex={0} aria-expanded="false">
            <img className="gb_Da gbii" src="https://lh3.googleusercontent.com/ogw/ADGmqu83ZG-2tWu49GoU9G_dyIpS_lx5FFYATi4KaBWP=s32-c-mo" srcSet="https://lh3.googleusercontent.com/ogw/ADGmqu83ZG-2tWu49GoU9G_dyIpS_lx5FFYATi4KaBWP=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/ADGmqu83ZG-2tWu49GoU9G_dyIpS_lx5FFYATi4KaBWP=s64-c-mo 2x " alt='true' aria-hidden="true" data-noaft />
          </a>
          <div className="gb_0a" />
          <div className="gb_Za" />
        </div>
      </div>
    </div>
    <div style={{overflow: 'hidden', position: 'absolute', top: 0, visibility: 'hidden', width: 328, zIndex: 991, height: 0, marginTop: 57, right: 0, marginRight: 4, transition: 'height 0.3s ease-in-out 0s'}}>
      <iframe role="presentation" frameBorder={0} scrolling="no" src="https://ogs.google.com/u/0/widget/app?origin=chrome-search%3A%2F%2Flocal-ntp&cn=app&pid=1&spid=243&hl=zh-CN" style={{height: '100%', width: '100%', visibility: 'hidden'}} />
    </div>
  </div>
  <div className="gb_1a gb_F gb_l gb_2a" aria-label="帐号信息" aria-hidden="true" img-loaded={1}>
  <div className="gb_ab">
  <div className="gb_bb">
  <img className="gb_Ia gbip gb_fb" src="https://lh3.googleusercontent.com/ogw/ADGmqu83ZG-2tWu49GoU9G_dyIpS_lx5FFYATi4KaBWP=s83-c-mo" title="个人资料" alt='true' aria-hidden="true" srcSet="https://lh3.googleusercontent.com/ogw/ADGmqu83ZG-2tWu49GoU9G_dyIpS_lx5FFYATi4KaBWP=s83-c-mo 1x, https://lh3.googleusercontent.com/ogw/ADGmqu83ZG-2tWu49GoU9G_dyIpS_lx5FFYATi4KaBWP=s192-c-mo 2x " />
  <div className="gb_jb gb_fb">
  <a className="gb_kb gb_3f gb_fb gb_8f" aria-label="更改个人资料照片" href="https://myaccount.google.com/?utm_source=OGB&tab=rk"><svg className="gb_lb" enableBackground="new 0 0 24 24" focusable="false" height={26} viewBox="0 0 24 24" width={18} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h16v12zM12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" /></svg>
  </a>
  </div>
  </div>
  <div className="gb_cb">
  <div className="gb_mb gb_nb">fei chen</div>
  <div className="gb_ob">fei355148@gmail.com</div>
  <a className="gb_sb gb_4f gbp1 gb_Re gb_5c" href="https://myaccount.google.com/?utm_source=OGB&tab=rk&utm_medium=act" target="_blank">管理您的 Google 帐号</a>
  </div>
  </div><div className="gb_Fb gb_Jb"><div className="gb_ag gb_gc gb_Ba"><div className="gb_hc" /></div><div className="gb_7f gb_Nb gb_Ba" aria-hidden="true"><a className="gb_Mb gb_Wb" href="https://www.google.com/webhp?authuser=0" aria-hidden="true"><img className="gb_Zb gb_fb" src="https://lh3.googleusercontent.com/-Vza0wFBnePw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckwO02-PPs_IIIMlM4CA_EKkJBy9Q/s48-c/photo.jpg" alt='true' aria-hidden="true" /><div className="gb_Pb"><div className="gb_5b">默认</div><div className="gb_1b">fei chen</div><div className="gb_3b" dir="ltr">fei355148@gmail.com</div></div></a></div><div className="gb_zb" aria-hidden="true"><svg className="gb_Ab" focusable="false" height={20} viewBox="0 0 20 20" width={20} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M0 0h20v20H0V0z" fill="none" /><path d="M6.18 7L10 10.82 13.82 7 15 8.17l-5 5-5-5z" /></svg></div><a className="gb_7b gb_Ba gb_Qb" href="https://myaccount.google.com/brandaccounts?authuser=0&continue=https://www.google.com%3Fhl%3Dzh-CN&service=https://www.google.com/webhp%3Fauthuser%3D%24authuser" aria-hidden="true"><div className="gb_8b"><svg focusable="false" height={20} viewBox="0 0 24 24" width={20} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5zm7-6c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z" fill="#5F6368" /><path d="M0 0h24v24H0V0z" fill="none" /></svg></div><div className="gb_ac gb_bc">所有品牌帐号</div><svg className="gb_cc" focusable="false" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#5F6368" /><path d="M0 0h24v24H0z" fill="none" /></svg></a></div><div className="gb_Rb" tabIndex={-1}><a className="gb_wb gb_0f" href="https://accounts.google.com/AddSession?hl=zh-CN&continue=https://www.google.com%3Fhl%3Dzh-CN&ec=GAlA8wE"><div className="gb_xb"><svg className="gb_yb" enableBackground="new 0 0 24 24" focusable="false" height={20} viewBox="0 0 24 24" width={20} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z" /></svg></div><div className="gb_Bb">添加其他帐号</div></a></div><div className="gb_1f gb_Cb"><a className="gb_Db gb_5f gb_dg gb_Re gb_5c" id="gb_71" href="https://accounts.google.com/Logout?hl=zh-CN&continue=https://www.google.com%3Fhl%3Dzh-CN&timeStmp=1612973426&secTok=.AG5fkS_UIwCUrMxkpBcjmh8s_myrxnwbHA&ec=GAdA8wE" target="_top">退出</a></div><div className="gb_2f gb_tb"><a className="gb_ub gb_Ib" href="https://policies.google.com/privacy?hl=zh-CN" target="_blank">隐私权政策</a><span className="gb_Pa" aria-hidden="true">•</span><a className="gb_ub gb_Hb" href="https://myaccount.google.com/termsofservice?hl=zh-CN" target="_blank">服务条款</a></div></div></div>
  </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
