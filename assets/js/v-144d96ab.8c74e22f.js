"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[28788],{33079:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-144d96ab",path:"/devices/8719514440937_8719514440999.html",title:"Philips 8719514440937/8719514440999 control via MQTT",lang:"en-US",frontmatter:{title:"Philips 8719514440937/8719514440999 control via MQTT",description:"Integrate your Philips 8719514440937/8719514440999 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-31T11:26:27.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/8719514440937_8719514440999.md",git:{updatedTime:1663603185e3}}},45678:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var o=a(66252);const s=(0,o.uE)('<h1 id="philips-8719514440937-8719514440999" tabindex="-1"><a class="header-anchor" href="#philips-8719514440937-8719514440999" aria-hidden="true">#</a> Philips 8719514440937/8719514440999</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>8719514440937/8719514440999</td></tr><tr><td>Vendor</td><td>Philips</td></tr><tr><td>Description</td><td>Hue Tap dial switch</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/8719514440937-8719514440999.jpg" alt="Philips 8719514440937/8719514440999"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),i=(0,o.Uk)("This device supports OTA updates, for more information see "),d=(0,o.Uk)("OTA updates"),n=(0,o.Uk)("."),l=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),r=(0,o.Uk)("How to use device type specific configuration"),c=(0,o.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_press</code>, <code>button_1_press_release</code>, <code>button_1_hold</code>, <code>button_1_hold_release</code>, <code>button_2_press</code>, <code>button_2_press_release</code>, <code>button_2_hold</code>, <code>button_2_hold_release</code>, <code>button_3_press</code>, <code>button_3_press_release</code>, <code>button_3_hold</code>, <code>button_3_hold_release</code>, <code>button_4_press</code>, <code>button_4_press_release</code>, <code>button_4_hold</code>, <code>button_4_hold_release</code>, <code>dial_rotate_left_step</code>, <code>dial_rotate_left_slow</code>, <code>dial_rotate_left_fast</code>, <code>dial_rotate_right_step</code>, <code>dial_rotate_right_slow</code>, <code>dial_rotate_right_fast</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),u={},p=(0,a(83744).Z)(u,[["render",function(e,t){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s,(0,o._)("p",null,[i,(0,o.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[d])),_:1}),n]),l,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[r])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}}}]);