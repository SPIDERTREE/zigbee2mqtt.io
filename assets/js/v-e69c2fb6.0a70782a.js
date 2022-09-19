"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85781],{32536:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-e69c2fb6",path:"/devices/ZB-Sm.html",title:"TuYa ZB-Sm control via MQTT",lang:"en-US",frontmatter:{title:"TuYa ZB-Sm control via MQTT",description:"Integrate your TuYa ZB-Sm via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-07-01T08:15:09.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Goto_positon (enum)",slug:"goto-positon-enum",children:[]},{level:3,title:"Motor_state (enum)",slug:"motor-state-enum",children:[]},{level:3,title:"Active_power (numeric)",slug:"active-power-numeric",children:[]},{level:3,title:"Cycle_count (numeric)",slug:"cycle-count-numeric",children:[]},{level:3,title:"Cycle_time (numeric)",slug:"cycle-time-numeric",children:[]},{level:3,title:"Top_limit (enum)",slug:"top-limit-enum",children:[]},{level:3,title:"Bottom_limit (enum)",slug:"bottom-limit-enum",children:[]},{level:3,title:"Favorite_position (numeric)",slug:"favorite-position-numeric",children:[]},{level:3,title:"Reverse_direction (binary)",slug:"reverse-direction-binary",children:[]},{level:3,title:"Motor_type (text)",slug:"motor-type-text",children:[]},{level:3,title:"Report (enum)",slug:"report-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZB-Sm.md",git:{updatedTime:1663603185e3}}},17922:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="tuya-zb-sm" tabindex="-1"><a class="header-anchor" href="#tuya-zb-sm" aria-hidden="true">#</a> TuYa ZB-Sm</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZB-Sm</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Tubular motor</td></tr><tr><td>Exposes</td><td>cover (state, position), goto_positon, motor_state, active_power, cycle_count, cycle_time, top_limit, bottom_limit, favorite_position, reverse_direction, motor_type, report, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZB-Sm.jpg" alt="TuYa ZB-Sm"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="goto-positon-enum" tabindex="-1"><a class="header-anchor" href="#goto-positon-enum" aria-hidden="true">#</a> Goto_positon (enum)</h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;goto_positon&quot;: NEW_VALUE}</code>. The possible values are: <code>25</code>, <code>50</code>, <code>75</code>, <code>FAVORITE</code>.</p><h3 id="motor-state-enum" tabindex="-1"><a class="header-anchor" href="#motor-state-enum" aria-hidden="true">#</a> Motor_state (enum)</h3><p>Value can be found in the published state on the <code>motor_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>OPENING</code>, <code>CLOSING</code>, <code>STOPPED</code>.</p><h3 id="active-power-numeric" tabindex="-1"><a class="header-anchor" href="#active-power-numeric" aria-hidden="true">#</a> Active_power (numeric)</h3><p>Active power. Value can be found in the published state on the <code>active_power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mWt</code>.</p><h3 id="cycle-count-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-count-numeric" aria-hidden="true">#</a> Cycle_count (numeric)</h3><p>Cycle count. Value can be found in the published state on the <code>cycle_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="cycle-time-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-time-numeric" aria-hidden="true">#</a> Cycle_time (numeric)</h3><p>Cycle time. Value can be found in the published state on the <code>cycle_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ms</code>.</p><h3 id="top-limit-enum" tabindex="-1"><a class="header-anchor" href="#top-limit-enum" aria-hidden="true">#</a> Top_limit (enum)</h3><p>Setup or clear top limit. Value can be found in the published state on the <code>top_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;top_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>CLEAR</code>.</p><h3 id="bottom-limit-enum" tabindex="-1"><a class="header-anchor" href="#bottom-limit-enum" aria-hidden="true">#</a> Bottom_limit (enum)</h3><p>Setup or clear bottom limit. Value can be found in the published state on the <code>bottom_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;bottom_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>CLEAR</code>.</p><h3 id="favorite-position-numeric" tabindex="-1"><a class="header-anchor" href="#favorite-position-numeric" aria-hidden="true">#</a> Favorite_position (numeric)</h3><p>Favorite position of this cover. Value can be found in the published state on the <code>favorite_position</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;favorite_position&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="reverse-direction-binary" tabindex="-1"><a class="header-anchor" href="#reverse-direction-binary" aria-hidden="true">#</a> Reverse_direction (binary)</h3><p>Inverts the cover direction. Value can be found in the published state on the <code>reverse_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reverse_direction&quot;: NEW_VALUE}</code>. If value equals <code>true</code> reverse_direction is ON, if <code>false</code> OFF.</p><h3 id="motor-type-text" tabindex="-1"><a class="header-anchor" href="#motor-type-text" aria-hidden="true">#</a> Motor_type (text)</h3><p>Value can be found in the published state on the <code>motor_type</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="report-enum" tabindex="-1"><a class="header-anchor" href="#report-enum" aria-hidden="true">#</a> Report (enum)</h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report&quot;: NEW_VALUE}</code>. The possible values are: ``.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',29),d={},a=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);