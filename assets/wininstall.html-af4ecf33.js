import{_ as n,M as a,p as o,q as i,N as t,R as s,a1 as d}from"./framework-c63c58dd.js";const l={},r=d(`<h1 id="win-的安装说明" tabindex="-1"><a class="header-anchor" href="#win-的安装说明" aria-hidden="true">#</a> win 的安装说明</h1><p><img src="https://img.shields.io/badge/lmbox凌萌盒©-V2.3-green?style=flat&amp;color=3aa675" alt="lmbox凌萌盒©"> <img src="https://img.shields.io/badge/premierepro-&gt;=2021-green?logo=adobepremierepro&amp;style=flat&amp;color=3aa675" alt="adobepremierepro"> <img src="https://img.shields.io/badge/aftereffect-&gt;=2021-green?logo=adobeaftereffects&amp;style=flat&amp;color=3aa675" alt="adobeaftereffects"> <img src="https://img.shields.io/badge/photoshop-&gt;=2021-green?logo=adobephotoshop&amp;style=flat&amp;color=3aa675" alt="photoshop"></p><div class="custom-container danger"><p class="custom-container-title">注意</p><p>在安装之前确保Adobe的pr或ae是关闭的，如果没有关闭则安装后需要重启软件。</p><p><strong>下面的安装方式可以任选其一</strong></p></div><h2 id="安装扩展" tabindex="-1"><a class="header-anchor" href="#安装扩展" aria-hidden="true">#</a> 安装扩展</h2><ul><li>第一步：需要在首页下载 <code>win版lmbox凌萌盒.zip</code> 文件到本地，并且确保软件是关闭的。</li><li>第二步：解压压缩包，然后运行 <code>win版lmbox安装.exe</code>，根据引导安装即可，然后重启软件。</li><li>第三步：提示安装完成后，打开Pr/Ae，然后在菜单栏的---<code>窗口</code>---<code>扩展</code>---<code>lmox凌萌盒©</code>---点击打开。</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>扩展安装的默认位置，如果需要手动卸载，可以在下面的目录查找删除。</p><p>下面的 <code>AppData</code> 文件夹一般是隐藏的，你可以在地址栏目输入 <code>$APPDATA%</code> 即可定位到目录</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  //扩展安装的默认位置，如果需要手动卸载，可以在下面的目录查找删除。
 C:/用户/用户名/AppData/Roaming/Adobe/CEP/extensions/com.sockite.lmbox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="普通复制安装扩展" tabindex="-1"><a class="header-anchor" href="#普通复制安装扩展" aria-hidden="true">#</a> 普通复制安装扩展</h2><ul><li>第一步：需要在首页下载 <code>常规通用安装版lmbox凌萌盒.zip</code> 文件到本地解压。</li><li>第二步：你只需要把文件夹 <code>扩展安装文件</code> 里面的 <code>com.sockite.lmbox</code> 文件夹拷贝到下面位置即可，有两个路径，任选其一，然后重启软件。</li><li>第三步：提示安装完成后，打开Pr/Ae，然后在菜单栏的--- <code>窗口</code> --- <code>扩展</code> --- <code>lmox凌萌盒©</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:/Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span>/Common Files/Adobe/CEP/extensions
 或
C:/用户/用户名/AppData/Roaming/Adobe/CEP/extensions/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载扩展" tabindex="-1"><a class="header-anchor" href="#卸载扩展" aria-hidden="true">#</a> 卸载扩展</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>是升级的话，一定要先卸载，然后再安装新的版本！</p></div><ul><li>第一步：在扩展打开的状态下，点击扩展面板左上角的三条横杠<code>三</code>---点击<code>卸载扩展</code>--<code>确定</code></li><li>第二步： 扩展自动卸载后会自动关闭，然后后重启软件完成卸载</li></ul><h2 id="视频演示" tabindex="-1"><a class="header-anchor" href="#视频演示" aria-hidden="true">#</a> 视频演示</h2>`,14);function c(p,m){const e=a("VideoPlayer");return o(),i("div",null,[r,t(e,{src:"http://cloud.video.taobao.com/play/u/765269922/p/1/e/6/t/1/364942535106.mp4"}),s(` 
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

<CodeGroup>
  <CodeGroupItem title="PNPM">

\`\`\`bash:no-line-numbers
pnpm install
\`\`\`

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

\`\`\`bash:no-line-numbers
yarn install
\`\`\`

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

\`\`\`bash:no-line-numbers
npm install
\`\`\`

  </CodeGroupItem>
</CodeGroup>

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码

\`\`\`ts
console.log('你好，VuePress！');
\`\`\`

::: `)])}const u=n(l,[["render",c],["__file","wininstall.html.vue"]]);export{u as default};
