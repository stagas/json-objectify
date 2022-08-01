<h1>
json-objectify <a href="https://npmjs.org/package/json-objectify"><img src="https://img.shields.io/badge/npm-v1.0.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-71-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/json-objectify@1.0.0/dist/json-objectify.min.js"><img src="https://img.shields.io/badge/brotli-656b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Like JSON.stringify but without the stringify part.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i json-objectify </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add json-objectify </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add json-objectify</code>
</td></tr></table>
</h4>

## API

<p>  <details id="createContext$1" title="Function" ><summary><span><a href="#createContext$1">#</a></span>  <code><strong>createContext</strong></code><em>(asIsCtors)</em>    </summary>  <a href="src/json-objectify.ts#L11">src/json-objectify.ts#L11</a>  <ul>    <p>    <details id="asIsCtors$3" title="Parameter" ><summary><span><a href="#asIsCtors$3">#</a></span>  <code><strong>asIsCtors</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>[]</code></span>  </summary>    <ul><p>any  []</p>        </ul></details>  <p><strong>createContext</strong><em>(asIsCtors)</em>  &nbsp;=&gt;  <ul>{<p>  <details id="deobjectify$17" title="Property" ><summary><span><a href="#deobjectify$17">#</a></span>  <code><strong>deobjectify</strong></code>    </summary>    <ul><p><details id="__type$18" title="Function" ><summary><span><a href="#__type$18">#</a></span>  <em>(value, reviver, top)</em>    </summary>    <ul>    <p>    <details id="value$20" title="Parameter" ><summary><span><a href="#value$20">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="reviver$21" title="Parameter" ><summary><span><a href="#reviver$21">#</a></span>  <code><strong>reviver</strong></code>    </summary>    <ul><p><span>Reviver</span></p>        </ul></details><details id="top$22" title="Parameter" ><summary><span><a href="#top$22">#</a></span>  <code><strong>top</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>true</code></span>  </summary>    <ul><p>boolean</p>        </ul></details>  <p><strong></strong><em>(value, reviver, top)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></p>        </ul></details><details id="objectify$5" title="Property" ><summary><span><a href="#objectify$5">#</a></span>  <code><strong>objectify</strong></code>    </summary>    <ul><p><details id="__type$6" title="Function" ><summary><span><a href="#__type$6">#</a></span>  <em>(value, replacer, top)</em>    </summary>    <ul>    <p>    <details id="value$8" title="Parameter" ><summary><span><a href="#value$8">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="replacer$9" title="Parameter" ><summary><span><a href="#replacer$9">#</a></span>  <code><strong>replacer</strong></code>    </summary>    <ul><p><span>Replacer</span></p>        </ul></details><details id="top$10" title="Parameter" ><summary><span><a href="#top$10">#</a></span>  <code><strong>top</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>true</code></span>  </summary>    <ul><p>boolean</p>        </ul></details>  <p><strong></strong><em>(value, replacer, top)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></p>        </ul></details><details id="objectifyAsync$11" title="Property" ><summary><span><a href="#objectifyAsync$11">#</a></span>  <code><strong>objectifyAsync</strong></code>    </summary>    <ul><p><details id="__type$12" title="Function" ><summary><span><a href="#__type$12">#</a></span>  <em>(value, replacer, top)</em>    </summary>    <ul>    <p>    <details id="value$14" title="Parameter" ><summary><span><a href="#value$14">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="replacer$15" title="Parameter" ><summary><span><a href="#replacer$15">#</a></span>  <code><strong>replacer</strong></code>    </summary>    <ul><p><span>Replacer</span></p>        </ul></details><details id="top$16" title="Parameter" ><summary><span><a href="#top$16">#</a></span>  <code><strong>top</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>true</code></span>  </summary>    <ul><p>boolean</p>        </ul></details>  <p><strong></strong><em>(value, replacer, top)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;any&gt;</ul></p></p>    </ul></details></p>        </ul></details></p>}</ul></p></p>    </ul></details><details id="deobjectify$33" title="Function" ><summary><span><a href="#deobjectify$33">#</a></span>  <code><strong>deobjectify</strong></code><em>(value, reviver, top)</em>    </summary>    <ul>    <p>    <details id="value$35" title="Parameter" ><summary><span><a href="#value$35">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="reviver$36" title="Parameter" ><summary><span><a href="#reviver$36">#</a></span>  <code><strong>reviver</strong></code>    </summary>    <ul><p><span>Reviver</span></p>        </ul></details><details id="top$37" title="Parameter" ><summary><span><a href="#top$37">#</a></span>  <code><strong>top</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>true</code></span>  </summary>    <ul><p>boolean</p>        </ul></details>  <p><strong>deobjectify</strong><em>(value, reviver, top)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details><details id="objectify$23" title="Function" ><summary><span><a href="#objectify$23">#</a></span>  <code><strong>objectify</strong></code><em>(value, replacer, top)</em>    </summary>    <ul>    <p>    <details id="value$25" title="Parameter" ><summary><span><a href="#value$25">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="replacer$26" title="Parameter" ><summary><span><a href="#replacer$26">#</a></span>  <code><strong>replacer</strong></code>    </summary>    <ul><p><span>Replacer</span></p>        </ul></details><details id="top$27" title="Parameter" ><summary><span><a href="#top$27">#</a></span>  <code><strong>top</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>true</code></span>  </summary>    <ul><p>boolean</p>        </ul></details>  <p><strong>objectify</strong><em>(value, replacer, top)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details><details id="objectifyAsync$28" title="Function" ><summary><span><a href="#objectifyAsync$28">#</a></span>  <code><strong>objectifyAsync</strong></code><em>(value, replacer, top)</em>    </summary>    <ul>    <p>    <details id="value$30" title="Parameter" ><summary><span><a href="#value$30">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="replacer$31" title="Parameter" ><summary><span><a href="#replacer$31">#</a></span>  <code><strong>replacer</strong></code>    </summary>    <ul><p><span>Replacer</span></p>        </ul></details><details id="top$32" title="Parameter" ><summary><span><a href="#top$32">#</a></span>  <code><strong>top</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>true</code></span>  </summary>    <ul><p>boolean</p>        </ul></details>  <p><strong>objectifyAsync</strong><em>(value, replacer, top)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;any&gt;</ul></p></p>    </ul></details></p>

## Credits

- [everyday-utils](https://npmjs.org/package/everyday-utils) by [stagas](https://github.com/stagas) &ndash; Everyday utilities

## Contributing

[Fork](https://github.com/stagas/json-objectify/fork) or [edit](https://github.dev/stagas/json-objectify) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
