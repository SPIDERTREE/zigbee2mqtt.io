"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47094],{82772:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r={key:"v-6d284bb1",path:"/devices/AX_Valve_Controller.html",title:"CTM Lyng AX_Valve_Controller control via MQTT",lang:"en-US",frontmatter:{title:"CTM Lyng AX_Valve_Controller control via MQTT",description:"Integrate your CTM Lyng AX_Valve_Controller via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-01T15:06:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Water_leak (binary)",slug:"water-leak-binary",children:[]},{level:3,title:"Active_water_leak (binary)",slug:"active-water-leak-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/AX_Valve_Controller.md",git:{updatedTime:1663603185e3}}},89970:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const r=(0,a(66252).uE)('<h1 id="ctm-lyng-ax-valve-controller" tabindex="-1"><a class="header-anchor" href="#ctm-lyng-ax-valve-controller" aria-hidden="true">#</a> CTM Lyng AX_Valve_Controller</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>AX_Valve_Controller</td></tr><tr><td>Vendor</td><td>CTM Lyng</td></tr><tr><td>Description</td><td>AX Valve Controller, water shutoff valve controller</td></tr><tr><td>Exposes</td><td>switch (state), water_leak, active_water_leak, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/AX_Valve_Controller.jpg" alt="CTM Lyng AX_Valve_Controller"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="water-leak-binary" tabindex="-1"><a class="header-anchor" href="#water-leak-binary" aria-hidden="true">#</a> Water_leak (binary)</h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water_leak is ON, if <code>false</code> OFF.</p><h3 id="active-water-leak-binary" tabindex="-1"><a class="header-anchor" href="#active-water-leak-binary" aria-hidden="true">#</a> Active_water_leak (binary)</h3><p>Indicates whether there is an active water leak. Value can be found in the published state on the <code>active_water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> active_water_leak is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),o={},i=(0,a(83744).Z)(o,[["render",function(e,t){return r}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,r]of t)e[a]=r;return e}}}]);