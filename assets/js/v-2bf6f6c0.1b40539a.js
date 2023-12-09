"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[53194],{132788:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-2bf6f6c0","path":"/devices/ZTS-EUR-C.html","title":"Moes ZTS-EUR-C control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes ZTS-EUR-C control via MQTT","description":"Integrate your Moes ZTS-EUR-C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-01T15:08:55.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Backlight (enum)","slug":"backlight-enum","link":"#backlight-enum","children":[]},{"level":3,"title":"Calibration (enum)","slug":"calibration-enum","link":"#calibration-enum","children":[]},{"level":3,"title":"Motor reversal (enum)","slug":"motor-reversal-enum","link":"#motor-reversal-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1702140677000},"filePathRelative":"devices/ZTS-EUR-C.md"}')},67116:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var i=o(166252);const a=(0,i._)("h1",{id:"moes-zts-eur-c",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#moes-zts-eur-c","aria-hidden":"true"},"#"),(0,i.Uk)(" Moes ZTS-EUR-C")],-1),l=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZTS-EUR-C")],-1),d=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Zigbee + RF curtain switch")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"cover (state, position), backlight, calibration, motor_reversal, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZTS-EUR-C.jpg",alt:"Moes ZTS-EUR-C"})])],-1),u=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration" aria-hidden="true">#</a> Calibration</h3><p>Calibration procedure:</p><ol><li>Turn calibration on</li><li>Move cover completely up (open)</li><li>Press stop</li><li>Close cover</li><li>Press stop when closed</li><li>Turn calibration off</li></ol>',4),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="backlight-enum" tabindex="-1"><a class="header-anchor" href="#backlight-enum" aria-hidden="true">#</a> Backlight (enum)</h3><p>Value can be found in the published state on the <code>backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="calibration-enum" tabindex="-1"><a class="header-anchor" href="#calibration-enum" aria-hidden="true">#</a> Calibration (enum)</h3><p>Value can be found in the published state on the <code>calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="motor-reversal-enum" tabindex="-1"><a class="header-anchor" href="#motor-reversal-enum" aria-hidden="true">#</a> Motor reversal (enum)</h3><p>Value can be found in the published state on the <code>motor_reversal</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),b={},v=(0,o(983744).Z)(b,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[l,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Moes"},{default:(0,i.w5)((()=>[(0,i.Uk)("Moes")])),_:1})])]),s,r,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,i.kq)(" Notes END: Do not edit below this line "),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);