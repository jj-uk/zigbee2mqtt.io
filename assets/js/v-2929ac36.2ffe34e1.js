"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[53111],{212441:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-2929ac36","path":"/devices/AV2010_23.html","title":"SMaBiT (Bitron Video) AV2010/23 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SMaBiT (Bitron Video) AV2010/23 control via MQTT","description":"Integrate your SMaBiT (Bitron Video) AV2010/23 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-30T19:53:25.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1702140677000},"filePathRelative":"devices/AV2010_23.md"}')},200960:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(166252);const a=(0,n._)("h1",{id:"smabit-bitron-video-av2010-23",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#smabit-bitron-video-av2010-23","aria-hidden":"true"},"#"),(0,n.Uk)(" SMaBiT (Bitron Video) AV2010/23")],-1),o=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"AV2010/23")],-1),s=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"4 button Zigbee remote control")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"action, battery_low, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/AV2010-23.jpg",alt:"SMaBiT (Bitron Video) AV2010/23"})])],-1),u=(0,n._)("h2",{id:"notes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,n.Uk)(" Notes")],-1),h=(0,n._)("h3",{id:"pairing",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,n.Uk)(" Pairing")],-1),p=(0,n._)("p",null,"Press and hold the second button (••) for about 10 seconds until the LED flashes once.",-1),b=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),v=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>recall_*</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),m={},g=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[o,(0,n._)("tbody",null,[l,(0,n._)("tr",null,[s,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=SMaBiT%20(Bitron%20Video)"},{default:(0,n.w5)((()=>[(0,n.Uk)("SMaBiT (Bitron Video)")])),_:1})])]),d,r,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,n.kq)(" Notes END: Do not edit below this line "),b,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);