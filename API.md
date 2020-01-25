## Classes

<dl>
<dt><a href="#App">App</a></dt>
<dd><p>Default interface to <a href="#Fabric">Fabric</a>.  Provides immutable types for all
elements of the <code>components</code> option.</p>
</dd>
<dt><a href="#App">App</a> ⇐ <code><a href="#Scribe">Scribe</a></code></dt>
<dd><p>Web-friendly application framework for building single-page applications with
Fabric-based networking and storage.</p>
</dd>
<dt><a href="#Chain">Chain</a></dt>
<dd><p>Chain.</p>
</dd>
<dt><a href="#Channel">Channel</a></dt>
<dd><p>Creates a channel between two peers.
of many transactions over time, to be settled on-chain later.</p>
</dd>
<dt><a href="#Circuit">Circuit</a></dt>
<dd><p>The <a href="#Circuit">Circuit</a> is the mechanism through which <a href="#Fabric">Fabric</a>
operates, a computable directed graph for execution be a network
of <a href="#Peer">Peer</a> components.  See also <a href="#Swarm">Swarm</a> for deeper
inspection of <a href="#Machine">Machine</a> mechanics.</p>
</dd>
<dt><a href="#CLI">CLI</a></dt>
<dd><p>Base class for a terminal-like interface to the Fabric network.</p>
</dd>
<dt><a href="#Collection">Collection</a></dt>
<dd><p>The <a href="#Collection">Collection</a> type maintains an ordered list of <a href="#State">State</a> items.</p>
</dd>
<dt><a href="#Compiler">Compiler</a> : <code>Object</code></dt>
<dd><p>Compilers build interfaces for users of Fabric applications.</p>
</dd>
<dt><a href="#Entity">Entity</a> : <code>Object</code></dt>
<dd><p>Live instance of an ARC in Fabric.</p>
</dd>
<dt><a href="#Fabric">Fabric</a></dt>
<dd><p>Interact with the Fabric network as if it were a local object.</p>
</dd>
<dt><a href="#Hash256">Hash256</a></dt>
<dd><p>Simple interaction with 256-bit spaces.</p>
</dd>
<dt><a href="#Interface">Interface</a> ⇐ <code>EventEmitter</code></dt>
<dd><p>Interfaces compile abstract contract code into <a href="#Chain">Chain</a>-executable transactions, or &quot;chaincode&quot;. For example, the &quot;Bitcoin&quot; interface might compile a Swap contract into Script, preparing a valid Bitcoin transaction for broadcast which executes the swap contract.</p>
</dd>
<dt><a href="#Ledger">Ledger</a> ⇐ <code><a href="#Scribe">Scribe</a></code></dt>
<dd><p>An ordered stack of pages.</p>
</dd>
<dt><a href="#Machine">Machine</a></dt>
<dd><p>General-purpose state machine with <a href="#Vector">Vector</a>-based instructions.</p>
</dd>
<dt><a href="#Mempool">Mempool</a></dt>
<dd><p>Stores a list of <a href="Transaction">Transaction</a> elements.</p>
</dd>
<dt><a href="#Message">Message</a> : <code>Object</code></dt>
<dd><p>The <a href="#Message">Message</a> type defines the Application Messaging Protocol, or AMP.
Each <a href="Actor">Actor</a> in the network receives and broadcasts messages,
selectively disclosing new routes to peers which may have open circuits.</p>
</dd>
<dt><a href="#Oracle">Oracle</a> ⇐ <code><a href="#Store">Store</a></code></dt>
<dd><p>An Oracle manages one or more collections, using a <code>mempool</code> for
transitive state.</p>
</dd>
<dt><a href="#Path">Path</a></dt>
<dd><p>A <a href="#Path">Path</a> is a <a href="#Fabric">Fabric</a>-native link to a <a href="Document">Document</a>
within the network.</p>
</dd>
<dt><a href="#Peer">Peer</a></dt>
<dd><p>An in-memory representation of a node in our network.</p>
</dd>
<dt><a href="#Remote">Remote</a> : <code><a href="#Remote">Remote</a></code></dt>
<dd><p>Interact with a remote <a href="#Resource">Resource</a>.</p>
</dd>
<dt><a href="#Resource">Resource</a></dt>
<dd><p>Generic interface for collections of digital objects.</p>
</dd>
<dt><a href="#Router">Router</a> ⇐ <code><a href="#Scribe">Scribe</a></code></dt>
<dd><p>Process incoming messages.</p>
</dd>
<dt><a href="#Scribe">Scribe</a> ⇐ <code><a href="#State">State</a></code></dt>
<dd><p>Simple tag-based recordkeeper.</p>
</dd>
<dt><a href="#Script">Script</a></dt>
<dd></dd>
<dt><a href="#Service">Service</a></dt>
<dd><p>The &quot;Service&quot; is a simple model for processing messages in a distributed
system.  <a href="#Service">Service</a> instances are public interfaces for outside systems,
and typically advertise their presence to the network.</p>
<p>To implement a Service, you will typically need to implement all methods from
this prototype.  In general, <code>connect</code> and <code>send</code> are the highest-priority
jobs, and by default the <code>fabric</code> property will serve as an I/O stream using
familiar semantics.</p>
</dd>
<dt><a href="#Session">Session</a></dt>
<dd><p>The <a href="#Session">Session</a> type describes a connection between <a href="#Peer">Peer</a>
objects, and includes its own lifecycle.</p>
</dd>
<dt><a href="#Stack">Stack</a></dt>
<dd><p>Manage stacks of data.</p>
</dd>
<dt><a href="#State">State</a></dt>
<dd><p>The <a href="#State">State</a> is the core of most <a href="User">User</a>-facing interactions.  To
interact with the <a href="User">User</a>, simply propose a change in the state by
committing to the outcome.  This workflow keeps app design quite simple!</p>
</dd>
<dt><a href="#Storage">Storage</a></dt>
<dd><p>Persistent data storage.</p>
</dd>
<dt><a href="#Store">Store</a></dt>
<dd><p>Long-term storage.</p>
</dd>
<dt><a href="#Swap">Swap</a> : <code>Object</code></dt>
<dd><p>The <a href="#Swap">Swap</a> contract executes a set of transactions on two distinct
<a href="#Chain">Chain</a> components, utilizing a secret-reveal mechanism to atomically
execute either the full set or none.</p>
</dd>
<dt><a href="#Swarm">Swarm</a> : <code>String</code></dt>
<dd><p>Orchestrates a network of peers.</p>
</dd>
<dt><a href="#Transition">Transition</a></dt>
<dd><p>The <a href="#Transition">Transition</a> type reflects a change from one finite
<a href="#State">State</a> to another.</p>
</dd>
<dt><a href="#Value">Value</a></dt>
<dd><p><a href="Number">Number</a>-like type.</p>
</dd>
<dt><a href="#Vector">Vector</a></dt>
<dd></dd>
<dt><a href="#Walker">Walker</a></dt>
<dd></dd>
<dt><a href="#Wallet">Wallet</a> : <code>Object</code></dt>
<dd><p>Manage keys and track their balances.</p>
</dd>
<dt><a href="#Worker">Worker</a></dt>
<dd><p>Workers are arbitrary containers for processing data.  They can be thought of
almost like &quot;threads&quot;, as they run asynchronously over the duration of a
contract&#39;s lifetime as &quot;fulfillment conditions&quot; for its closure.</p>
</dd>
</dl>

<a name="App"></a>

## App
Default interface to [Fabric](#Fabric).  Provides immutable types for all
elements of the `components` option.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| config | <code>Configuration</code> | Initial [Vector](#Vector). |
| config.components | <code>Map</code> | Transformation function of `Σ ⇒ Δ`. |


* [App](#App)
    * [new App([config])](#new_App_new)
    * [new App(definition)](#new_App_new)
    * [.render()](#App+render) ⇒ <code>Mixed</code>
    * [.start()](#App+start) ⇒ <code>Promise</code>
    * [.stop()](#App+stop) ⇒ <code>Promise</code>
    * [.define(name, structure)](#App+define) ⇒ <code>Object</code>
    * [.defer(authority)](#App+defer) ⇒ [<code>App</code>](#App)
    * [.attach(element)](#App+attach) ⇒ [<code>App</code>](#App)
    * [.consume(resources)](#App+consume) ⇒ [<code>App</code>](#App)
    * [.envelop(selector)](#App+envelop) ⇒ [<code>App</code>](#App)
    * [.use(name, definition)](#App+use) ⇒ [<code>App</code>](#App)
    * [.render()](#App+render) ⇒ <code>String</code>
    * [.now()](#Scribe+now) ⇒ <code>Number</code>
    * [.trust(source)](#Scribe+trust) ⇒ [<code>Scribe</code>](#Scribe)
    * [.inherits(scribe)](#Scribe+inherits) ⇒ [<code>Scribe</code>](#Scribe)

<a name="new_App_new"></a>

### new App([config])
Create a new instance of the Fabric App.


| Param | Type | Description |
| --- | --- | --- |
| [config] | <code>Object</code> | Configuration object. |
| [config.store] | <code>Object</code> | Path to local storage. |
| [config.components] | <code>Object</code> | Map of components. |
| [config.components.list] | <code>Object</code> | Name of "list" component. |
| [config.components.view] | <code>Object</code> | Name of "view" component. |

<a name="new_App_new"></a>

### new App(definition)
Generic bundle for building Fabric applications.


| Param | Type | Description |
| --- | --- | --- |
| definition | <code>Object</code> | Application definition.  See `config` for examples. |

<a name="App+render"></a>

### app.render() ⇒ <code>Mixed</code>
Draw the application to canvas (display).

**Kind**: instance method of [<code>App</code>](#App)  
<a name="App+start"></a>

### app.start() ⇒ <code>Promise</code>
Start the program.

**Kind**: instance method of [<code>App</code>](#App)  
<a name="App+stop"></a>

### app.stop() ⇒ <code>Promise</code>
Stop the program.

**Kind**: instance method of [<code>App</code>](#App)  
<a name="App+define"></a>

### app.define(name, structure) ⇒ <code>Object</code>
Define a Resource, or "Type", used by the application.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: <code>Object</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Human-friendly name for the Resource. |
| structure | <code>Object</code> | Map of attribute names -> definitions. |

<a name="App+defer"></a>

### app.defer(authority) ⇒ [<code>App</code>](#App)
Defer control of this application to an outside authority.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>App</code>](#App) - The configured application as deferred to `authority`.  

| Param | Type | Description |
| --- | --- | --- |
| authority | <code>String</code> | Hostname to trust. |

<a name="App+attach"></a>

### app.attach(element) ⇒ [<code>App</code>](#App)
Configure the Application to use a specific element.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>App</code>](#App) - Configured instance of the Application.  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>DOMElement</code> | DOM element to bind to. |

<a name="App+consume"></a>

### app.consume(resources) ⇒ [<code>App</code>](#App)
Define the Application's resources from an existing resource map.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>App</code>](#App) - Configured instance of the Application.  

| Param | Type | Description |
| --- | --- | --- |
| resources | <code>Object</code> | Map of resource definitions by name. |

<a name="App+envelop"></a>

### app.envelop(selector) ⇒ [<code>App</code>](#App)
Use a CSS selector to find an element in the current document's tree and
bind to it as the render target.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>App</code>](#App) - Instance of app with bound element.  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>String</code> | CSS selector. |

<a name="App+use"></a>

### app.use(name, definition) ⇒ [<code>App</code>](#App)
Define a named [Resource](#Resource).

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>App</code>](#App) - Configurated instance of the [App](#App).  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Human-friendly name for this resource. |
| definition | <code>Object</code> | Map of configuration values. |

<a name="App+render"></a>

### app.render() ⇒ <code>String</code>
Get the output of our program.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: <code>String</code> - Output of the program.  
<a name="Scribe+now"></a>

### app.now() ⇒ <code>Number</code>
Retrives the current timestamp, in milliseconds.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: <code>Number</code> - [Number](Number) representation of the millisecond [Integer](Integer) value.  
<a name="Scribe+trust"></a>

### app.trust(source) ⇒ [<code>Scribe</code>](#Scribe)
Blindly bind event handlers to the [Source](Source).

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>Scribe</code>](#Scribe) - Instance of the [Scribe](#Scribe).  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Source</code> | Event stream. |

<a name="Scribe+inherits"></a>

### app.inherits(scribe) ⇒ [<code>Scribe</code>](#Scribe)
Use an existing Scribe instance as a parent.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>Scribe</code>](#Scribe) - The configured instance of the Scribe.  

| Param | Type | Description |
| --- | --- | --- |
| scribe | [<code>Scribe</code>](#Scribe) | Instance of Scribe to use as parent. |

<a name="App"></a>

## App ⇐ [<code>Scribe</code>](#Scribe)
Web-friendly application framework for building single-page applications with
Fabric-based networking and storage.

**Kind**: global class  
**Extends**: [<code>Scribe</code>](#Scribe)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| components | [<code>Collection</code>](#Collection) | Interface elements. |
| stash | [<code>Store</code>](#Store) | Routable [Datastore](Datastore). |


* [App](#App) ⇐ [<code>Scribe</code>](#Scribe)
    * [new App([config])](#new_App_new)
    * [new App(definition)](#new_App_new)
    * [.render()](#App+render) ⇒ <code>Mixed</code>
    * [.start()](#App+start) ⇒ <code>Promise</code>
    * [.stop()](#App+stop) ⇒ <code>Promise</code>
    * [.define(name, structure)](#App+define) ⇒ <code>Object</code>
    * [.defer(authority)](#App+defer) ⇒ [<code>App</code>](#App)
    * [.attach(element)](#App+attach) ⇒ [<code>App</code>](#App)
    * [.consume(resources)](#App+consume) ⇒ [<code>App</code>](#App)
    * [.envelop(selector)](#App+envelop) ⇒ [<code>App</code>](#App)
    * [.use(name, definition)](#App+use) ⇒ [<code>App</code>](#App)
    * [.render()](#App+render) ⇒ <code>String</code>
    * [.now()](#Scribe+now) ⇒ <code>Number</code>
    * [.trust(source)](#Scribe+trust) ⇒ [<code>Scribe</code>](#Scribe)
    * [.inherits(scribe)](#Scribe+inherits) ⇒ [<code>Scribe</code>](#Scribe)

<a name="new_App_new"></a>

### new App([config])
Create a new instance of the Fabric App.


| Param | Type | Description |
| --- | --- | --- |
| [config] | <code>Object</code> | Configuration object. |
| [config.store] | <code>Object</code> | Path to local storage. |
| [config.components] | <code>Object</code> | Map of components. |
| [config.components.list] | <code>Object</code> | Name of "list" component. |
| [config.components.view] | <code>Object</code> | Name of "view" component. |

<a name="new_App_new"></a>

### new App(definition)
Generic bundle for building Fabric applications.


| Param | Type | Description |
| --- | --- | --- |
| definition | <code>Object</code> | Application definition.  See `config` for examples. |

<a name="App+render"></a>

### app.render() ⇒ <code>Mixed</code>
Draw the application to canvas (display).

**Kind**: instance method of [<code>App</code>](#App)  
<a name="App+start"></a>

### app.start() ⇒ <code>Promise</code>
Start the program.

**Kind**: instance method of [<code>App</code>](#App)  
<a name="App+stop"></a>

### app.stop() ⇒ <code>Promise</code>
Stop the program.

**Kind**: instance method of [<code>App</code>](#App)  
<a name="App+define"></a>

### app.define(name, structure) ⇒ <code>Object</code>
Define a Resource, or "Type", used by the application.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: <code>Object</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Human-friendly name for the Resource. |
| structure | <code>Object</code> | Map of attribute names -> definitions. |

<a name="App+defer"></a>

### app.defer(authority) ⇒ [<code>App</code>](#App)
Defer control of this application to an outside authority.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>App</code>](#App) - The configured application as deferred to `authority`.  

| Param | Type | Description |
| --- | --- | --- |
| authority | <code>String</code> | Hostname to trust. |

<a name="App+attach"></a>

### app.attach(element) ⇒ [<code>App</code>](#App)
Configure the Application to use a specific element.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>App</code>](#App) - Configured instance of the Application.  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>DOMElement</code> | DOM element to bind to. |

<a name="App+consume"></a>

### app.consume(resources) ⇒ [<code>App</code>](#App)
Define the Application's resources from an existing resource map.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>App</code>](#App) - Configured instance of the Application.  

| Param | Type | Description |
| --- | --- | --- |
| resources | <code>Object</code> | Map of resource definitions by name. |

<a name="App+envelop"></a>

### app.envelop(selector) ⇒ [<code>App</code>](#App)
Use a CSS selector to find an element in the current document's tree and
bind to it as the render target.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>App</code>](#App) - Instance of app with bound element.  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>String</code> | CSS selector. |

<a name="App+use"></a>

### app.use(name, definition) ⇒ [<code>App</code>](#App)
Define a named [Resource](#Resource).

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>App</code>](#App) - Configurated instance of the [App](#App).  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Human-friendly name for this resource. |
| definition | <code>Object</code> | Map of configuration values. |

<a name="App+render"></a>

### app.render() ⇒ <code>String</code>
Get the output of our program.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: <code>String</code> - Output of the program.  
<a name="Scribe+now"></a>

### app.now() ⇒ <code>Number</code>
Retrives the current timestamp, in milliseconds.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: <code>Number</code> - [Number](Number) representation of the millisecond [Integer](Integer) value.  
<a name="Scribe+trust"></a>

### app.trust(source) ⇒ [<code>Scribe</code>](#Scribe)
Blindly bind event handlers to the [Source](Source).

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>Scribe</code>](#Scribe) - Instance of the [Scribe](#Scribe).  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Source</code> | Event stream. |

<a name="Scribe+inherits"></a>

### app.inherits(scribe) ⇒ [<code>Scribe</code>](#Scribe)
Use an existing Scribe instance as a parent.

**Kind**: instance method of [<code>App</code>](#App)  
**Returns**: [<code>Scribe</code>](#Scribe) - The configured instance of the Scribe.  

| Param | Type | Description |
| --- | --- | --- |
| scribe | [<code>Scribe</code>](#Scribe) | Instance of Scribe to use as parent. |

<a name="Chain"></a>

## Chain
Chain.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Current name. |
| indices | <code>Map</code> |  |
| ledger | [<code>Ledger</code>](#Ledger) |  |
| storage | [<code>Storage</code>](#Storage) |  |

<a name="new_Chain_new"></a>

### new Chain(genesis)
Holds an immutable chain of events.


| Param | Type | Description |
| --- | --- | --- |
| genesis | [<code>Vector</code>](#Vector) | Initial state for the chain of events. |

<a name="Channel"></a>

## Channel
Creates a channel between two peers.
of many transactions over time, to be settled on-chain later.

**Kind**: global class  

* [Channel](#Channel)
    * [new Channel([settings])](#new_Channel_new)
    * [.add(amount)](#Channel+add)
    * [.fund(input)](#Channel+fund)
    * [.open(channel)](#Channel+open)

<a name="new_Channel_new"></a>

### new Channel([settings])

| Param | Type | Description |
| --- | --- | --- |
| [settings] | <code>Object</code> | Configuration for the channel. |

<a name="Channel+add"></a>

### channel.add(amount)
Add an amount to the channel's balance.

**Kind**: instance method of [<code>Channel</code>](#Channel)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>Number</code> | Amount value to add to current outgoing balance. |

<a name="Channel+fund"></a>

### channel.fund(input)
Fund the channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Mixed</code> | Instance of a [Transaction](Transaction). |

<a name="Channel+open"></a>

### channel.open(channel)
Opens a [Channel](#Channel) with a [Peer](#Peer).

**Kind**: instance method of [<code>Channel</code>](#Channel)  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>Object</code> | Channel settings. |

<a name="Circuit"></a>

## Circuit
The [Circuit](#Circuit) is the mechanism through which [Fabric](#Fabric)
operates, a computable directed graph for execution be a network
of [Peer](#Peer) components.  See also [Swarm](#Swarm) for deeper
inspection of [Machine](#Machine) mechanics.

**Kind**: global class  
<a name="CLI"></a>

## CLI
Base class for a terminal-like interface to the Fabric network.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Initial [Vector](#Vector). |
| oracle | [<code>Oracle</code>](#Oracle) | Instance of [Oracle](#Oracle). |


* [CLI](#CLI)
    * [new CLI(configuration)](#new_CLI_new)
    * [._handleChanges(msg)](#CLI+_handleChanges) ⇒ [<code>CLI</code>](#CLI)

<a name="new_CLI_new"></a>

### new CLI(configuration)
Base class for a terminal-like interface to the Fabric network.


| Param | Type | Description |
| --- | --- | --- |
| configuration | <code>Object</code> | Configuration object for the CLI. |

<a name="CLI+_handleChanges"></a>

### clI.\_handleChanges(msg) ⇒ [<code>CLI</code>](#CLI)
Update UI as necessary based on changes from Oracle.

**Kind**: instance method of [<code>CLI</code>](#CLI)  

| Param | Type | Description |
| --- | --- | --- |
| msg | [<code>Message</code>](#Message) | Incoming [Message](#Message). |

<a name="Collection"></a>

## Collection
The [Collection](#Collection) type maintains an ordered list of [State](#State) items.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @entity | <code>Object</code> | Fabric-bound entity object. |


* [Collection](#Collection)
    * [new Collection([configuration])](#new_Collection_new)
    * [.asMerkleTree()](#Collection+asMerkleTree) ⇒ <code>MerkleTree</code>
    * [._setKey(name)](#Collection+_setKey)
    * [.getByID(id)](#Collection+getByID)
    * [.getLatest()](#Collection+getLatest)
    * [.findByField(name, value)](#Collection+findByField)
    * [.findByName(name)](#Collection+findByName)
    * [.findBySymbol(symbol)](#Collection+findBySymbol)
    * [._patchTarget(path, patches)](#Collection+_patchTarget)
    * [.push(data)](#Collection+push) ⇒ <code>Number</code>
    * ~~[.list()](#Collection+list) ⇒ <code>Array</code>~~
    * [.toTypedArray()](#Collection+toTypedArray)
    * [.map()](#Collection+map) ⇒ <code>Array</code>
    * [.create(entity)](#Collection+create) ⇒ <code>Promise</code>
    * [.import(state, commit)](#Collection+import)

<a name="new_Collection_new"></a>

### new Collection([configuration])
Create a list of [Entity](#Entity)-like objects for later retrieval.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [configuration] | <code>Object</code> | <code>{}</code> | Configuration object. |

<a name="Collection+asMerkleTree"></a>

### collection.asMerkleTree() ⇒ <code>MerkleTree</code>
Current elements of the collection as a [MerkleTree](MerkleTree).

**Kind**: instance method of [<code>Collection</code>](#Collection)  
<a name="Collection+_setKey"></a>

### collection.\_setKey(name)
Sets the `key` property of collection settings.

**Kind**: instance method of [<code>Collection</code>](#Collection)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Value to set the `key` setting to. |

<a name="Collection+getByID"></a>

### collection.getByID(id)
Retrieve an element from the collection by ID.

**Kind**: instance method of [<code>Collection</code>](#Collection)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Document identifier. |

<a name="Collection+getLatest"></a>

### collection.getLatest()
Retrieve the most recent element in the collection.

**Kind**: instance method of [<code>Collection</code>](#Collection)  
<a name="Collection+findByField"></a>

### collection.findByField(name, value)
Find a document by specific field.

**Kind**: instance method of [<code>Collection</code>](#Collection)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name of field to search. |
| value | <code>String</code> | Value to match. |

<a name="Collection+findByName"></a>

### collection.findByName(name)
Find a document by the "name" field.

**Kind**: instance method of [<code>Collection</code>](#Collection)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name to search for. |

<a name="Collection+findBySymbol"></a>

### collection.findBySymbol(symbol)
Find a document by the "symbol" field.

**Kind**: instance method of [<code>Collection</code>](#Collection)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>String</code> | Value to search for. |

<a name="Collection+_patchTarget"></a>

### collection.\_patchTarget(path, patches)
Modify a target document using an array of atomic updates.

**Kind**: instance method of [<code>Collection</code>](#Collection)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path to the document to modify. |
| patches | <code>Array</code> | List of operations to apply. |

<a name="Collection+push"></a>

### collection.push(data) ⇒ <code>Number</code>
Adds an [Entity](#Entity) to the [Collection](#Collection).

**Kind**: instance method of [<code>Collection</code>](#Collection)  
**Returns**: <code>Number</code> - Length of the collection.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Mixed</code> | [Entity](#Entity) to add. |

<a name="Collection+list"></a>

### ~~collection.list() ⇒ <code>Array</code>~~
***Deprecated***

Generate a list of elements in the collection.

**Kind**: instance method of [<code>Collection</code>](#Collection)  
<a name="Collection+toTypedArray"></a>

### collection.toTypedArray()
Provides the [Collection](#Collection) as an [Array](Array) of typed
elements.  The type of these elments are defined by the collection's
type, supplied in the constructor.

**Kind**: instance method of [<code>Collection</code>](#Collection)  
<a name="Collection+map"></a>

### collection.map() ⇒ <code>Array</code>
Generate a hashtable of elements in the collection.

**Kind**: instance method of [<code>Collection</code>](#Collection)  
<a name="Collection+create"></a>

### collection.create(entity) ⇒ <code>Promise</code>
Create an instance of an [Entity](#Entity).

**Kind**: instance method of [<code>Collection</code>](#Collection)  
**Returns**: <code>Promise</code> - Resolves with instantiated [Entity](#Entity).  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | Object with properties. |

<a name="Collection+import"></a>

### collection.import(state, commit)
Loads [State](#State) into memory.

**Kind**: instance method of [<code>Collection</code>](#Collection)  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>State</code>](#State) | State to import. |
| commit | <code>Boolean</code> | Whether or not to commit the result. |

<a name="Compiler"></a>

## Compiler : <code>Object</code>
Compilers build interfaces for users of Fabric applications.

**Kind**: global class  
<a name="new_Compiler_new"></a>

### new Compiler([settings])
Create a new Compiler.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [settings] | <code>Object</code> | <code>{}</code> | Configuration. |

<a name="Entity"></a>

## Entity : <code>Object</code>
Live instance of an ARC in Fabric.

**Kind**: global class  

* [Entity](#Entity) : <code>Object</code>
    * [new Entity([data])](#new_Entity_new)
    * [.toJSON()](#Entity+toJSON) ⇒ <code>String</code>
    * [.toRaw()](#Entity+toRaw) ⇒ <code>Buffer</code>
    * [._downsample([input])](#Entity+_downsample)

<a name="new_Entity_new"></a>

### new Entity([data])
Generic template for virtual objects.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | <code>Object</code> | <code>{}</code> | Pass an object to use. |

<a name="Entity+toJSON"></a>

### entity.toJSON() ⇒ <code>String</code>
Produces a string of JSON, representing the entity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
**Returns**: <code>String</code> - JSON-encoded object.  
<a name="Entity+toRaw"></a>

### entity.toRaw() ⇒ <code>Buffer</code>
As a [Buffer](Buffer).

**Kind**: instance method of [<code>Entity</code>](#Entity)  
**Returns**: <code>Buffer</code> - Slice of memory.  
<a name="Entity+_downsample"></a>

### entity.\_downsample([input])
Return a [Fabric](#Fabric)-labeled [Object](Object) for this [Entity](#Entity).

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type | Description |
| --- | --- | --- |
| [input] | <code>Mixed</code> | Input to downsample.  If not provided, current Entity will be used. |

<a name="Fabric"></a>

## Fabric
Interact with the Fabric network as if it were a local object.

**Kind**: global class  
<a name="new_Fabric_new"></a>

### new Fabric([settings])

| Param | Type | Description |
| --- | --- | --- |
| [settings] | <code>Object</code> | Configuration for the layer. |
| [settings.port] | <code>Object</code> | Port to bind to for incoming TCP connections. |

<a name="Hash256"></a>

## Hash256
Simple interaction with 256-bit spaces.

**Kind**: global class  

* [Hash256](#Hash256)
    * [new Hash256(settings)](#new_Hash256_new)
    * [.digest(input)](#Hash256.digest) ⇒ <code>String</code>

<a name="new_Hash256_new"></a>

### new Hash256(settings)
Create an instance of a `Hash256` object by calling `new Hash256()`,
where `settings` can be provided to supply a particular input object.

If the `settings` is not a string, `input` must be provided.


| Param | Type | Description |
| --- | --- | --- |
| settings | <code>Object</code> |  |
| settings.input | <code>String</code> | Input string to map as 256-bit hash. |

<a name="Hash256.digest"></a>

### Hash256.digest(input) ⇒ <code>String</code>
**Kind**: static method of [<code>Hash256</code>](#Hash256)  
**Returns**: <code>String</code> - `SHA256(input)` as a hexadecimal string.  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 

<a name="Interface"></a>

## Interface ⇐ <code>EventEmitter</code>
Interfaces compile abstract contract code into [Chain](#Chain)-executable transactions, or "chaincode". For example, the "Bitcoin" interface might compile a Swap contract into Script, preparing a valid Bitcoin transaction for broadcast which executes the swap contract.

**Kind**: global class  
**Extends**: <code>EventEmitter</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>String</code> | Human-friendly value representing the Interface's current [State](#State). |


* [Interface](#Interface) ⇐ <code>EventEmitter</code>
    * [new Interface(settings)](#new_Interface_new)
    * [.state](#Interface+state)
    * [.start()](#Interface+start)
    * [.stop()](#Interface+stop)
    * [.cycle(val)](#Interface+cycle)
    * [.log(...inputs)](#Interface+log)
    * [.now()](#Interface+now) ⇒ <code>Number</code>

<a name="new_Interface_new"></a>

### new Interface(settings)
Define an [Interface](#Interface) by creating an instance of this class.


| Param | Type | Description |
| --- | --- | --- |
| settings | <code>Object</code> | Configuration values. |

<a name="Interface+state"></a>

### interface.state
Getter for [State](#State).

**Kind**: instance property of [<code>Interface</code>](#Interface)  
<a name="Interface+start"></a>

### interface.start()
Start the [Interface](#Interface).

**Kind**: instance method of [<code>Interface</code>](#Interface)  
<a name="Interface+stop"></a>

### interface.stop()
Stop the Interface.

**Kind**: instance method of [<code>Interface</code>](#Interface)  
<a name="Interface+cycle"></a>

### interface.cycle(val)
Ticks the clock with a named [Cycle](Cycle).

**Kind**: instance method of [<code>Interface</code>](#Interface)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> | Name of cycle to scribe. |

<a name="Interface+log"></a>

### interface.log(...inputs)
Log some output to the console.

**Kind**: instance method of [<code>Interface</code>](#Interface)  

| Param | Type | Description |
| --- | --- | --- |
| ...inputs | <code>any</code> | Components of the message to long.  Can be a single {@link} String, many [String](String) objects, or anything else. |

<a name="Interface+now"></a>

### interface.now() ⇒ <code>Number</code>
Returns current timestamp.

**Kind**: instance method of [<code>Interface</code>](#Interface)  
<a name="Ledger"></a>

## Ledger ⇐ [<code>Scribe</code>](#Scribe)
An ordered stack of pages.

**Kind**: global class  
**Extends**: [<code>Scribe</code>](#Scribe)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| memory | <code>Buffer</code> | The ledger's memory (4096 bytes). |
| stack | [<code>Stack</code>](#Stack) | The ledger's stack. |
| tip | <code>Mixed</code> | The most recent page in the ledger. |


* [Ledger](#Ledger) ⇐ [<code>Scribe</code>](#Scribe)
    * [.id](#State+id) : <code>Boolean</code>
    * [.append(item)](#Ledger+append) ⇒ <code>Promise</code>
    * [.now()](#Scribe+now) ⇒ <code>Number</code>
    * [.trust(source)](#Scribe+trust) ⇒ [<code>Scribe</code>](#Scribe)
    * [.inherits(scribe)](#Scribe+inherits) ⇒ [<code>Scribe</code>](#Scribe)
    * [.toString()](#State+toString) ⇒ <code>String</code>
    * [.serialize([input])](#State+serialize) ⇒ <code>Buffer</code>
    * [.deserialize(input)](#State+deserialize) ⇒ [<code>State</code>](#State)
    * [.fork()](#State+fork) ⇒ [<code>State</code>](#State)
    * [.get(path)](#State+get) ⇒ <code>Mixed</code>
    * [.set(path)](#State+set) ⇒ <code>Mixed</code>
    * [.commit()](#State+commit)
    * [.render()](#State+render) ⇒ <code>String</code>

<a name="State+id"></a>

### ledger.id : <code>Boolean</code>
Identity function.

**Kind**: instance property of [<code>Ledger</code>](#Ledger)  
<a name="Ledger+append"></a>

### ledger.append(item) ⇒ <code>Promise</code>
Attempts to append a [Page](Page) to the ledger.

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  
**Returns**: <code>Promise</code> - Resolves after the change has been committed.  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Mixed</code> | Item to store. |

<a name="Scribe+now"></a>

### ledger.now() ⇒ <code>Number</code>
Retrives the current timestamp, in milliseconds.

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  
**Returns**: <code>Number</code> - [Number](Number) representation of the millisecond [Integer](Integer) value.  
<a name="Scribe+trust"></a>

### ledger.trust(source) ⇒ [<code>Scribe</code>](#Scribe)
Blindly bind event handlers to the [Source](Source).

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  
**Returns**: [<code>Scribe</code>](#Scribe) - Instance of the [Scribe](#Scribe).  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Source</code> | Event stream. |

<a name="Scribe+inherits"></a>

### ledger.inherits(scribe) ⇒ [<code>Scribe</code>](#Scribe)
Use an existing Scribe instance as a parent.

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  
**Returns**: [<code>Scribe</code>](#Scribe) - The configured instance of the Scribe.  

| Param | Type | Description |
| --- | --- | --- |
| scribe | [<code>Scribe</code>](#Scribe) | Instance of Scribe to use as parent. |

<a name="State+toString"></a>

### ledger.toString() ⇒ <code>String</code>
Unmarshall an existing state to an instance of a [Blob](Blob).

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  
**Returns**: <code>String</code> - Serialized [Blob](Blob).  
<a name="State+serialize"></a>

### ledger.serialize([input]) ⇒ <code>Buffer</code>
Convert to [Buffer](Buffer).

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  
**Returns**: <code>Buffer</code> - [Store](#Store)-able blob.  

| Param | Type | Description |
| --- | --- | --- |
| [input] | <code>Mixed</code> | Input to serialize. |

<a name="State+deserialize"></a>

### ledger.deserialize(input) ⇒ [<code>State</code>](#State)
Take a hex-encoded input and convert to a [State](#State) object.

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  
**Returns**: [<code>State</code>](#State) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | [description] |

<a name="State+fork"></a>

### ledger.fork() ⇒ [<code>State</code>](#State)
Creates a new child [State](#State), with `@parent` set to
the current [State](#State) by immutable identifier.

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  
<a name="State+get"></a>

### ledger.get(path) ⇒ <code>Mixed</code>
Retrieve a key from the [State](#State).

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  

| Param | Type | Description |
| --- | --- | --- |
| path | [<code>Path</code>](#Path) | Key to retrieve. |

<a name="State+set"></a>

### ledger.set(path) ⇒ <code>Mixed</code>
Set a key in the [State](#State) to a particular value.

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  

| Param | Type | Description |
| --- | --- | --- |
| path | [<code>Path</code>](#Path) | Key to retrieve. |

<a name="State+commit"></a>

### ledger.commit()
Increment the vector clock, broadcast all changes as a transaction.

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  
**Overrides**: [<code>commit</code>](#State+commit)  
<a name="State+render"></a>

### ledger.render() ⇒ <code>String</code>
Compose a JSON string for network consumption.

**Kind**: instance method of [<code>Ledger</code>](#Ledger)  
**Overrides**: [<code>render</code>](#State+render)  
**Returns**: <code>String</code> - JSON-encoded [String](String).  
<a name="Machine"></a>

## Machine
General-purpose state machine with [Vector](#Vector)-based instructions.

**Kind**: global class  

* [Machine](#Machine)
    * [new Machine(config)](#new_Machine_new)
    * [.sip([n])](#Machine+sip) ⇒ <code>Number</code>
    * [.compute(input)](#Machine+compute) ⇒ <code>Promise</code>

<a name="new_Machine_new"></a>

### new Machine(config)
Create a Machine.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Run-time configuration. |

<a name="Machine+sip"></a>

### machine.sip([n]) ⇒ <code>Number</code>
Get `n` bits of entropy.

**Kind**: instance method of [<code>Machine</code>](#Machine)  
**Returns**: <code>Number</code> - Random bits from [Generator](Generator).  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>Number</code> | <code>32</code> | Number of bits to retrieve (max = 32). |

<a name="Machine+compute"></a>

### machine.compute(input) ⇒ <code>Promise</code>
Computes the next "step" for our current Vector.  Analagous to `sum`.
The top item on the stack is always the memory held at current position,
so counts should always begin with 0.

**Kind**: instance method of [<code>Machine</code>](#Machine)  

| Param | Type | Description |
| --- | --- | --- |
| input | [<code>Vector</code>](#Vector) | Input state, undefined if desired. |

<a name="Mempool"></a>

## Mempool
Stores a list of [Transaction](Transaction) elements.

**Kind**: global class  
**Emits**: <code>event:{Message} confirmed Emitted when the Mempool has dropped a transaction.</code>  
<a name="new_Mempool_new"></a>

### new Mempool(settings)
Creates an instance of a [Mempool](#Mempool) [Service](#Service).


| Param | Type | Description |
| --- | --- | --- |
| settings | <code>Object</code> | Map of settings to utilize. |

<a name="Message"></a>

## Message : <code>Object</code>
The [Message](#Message) type defines the Application Messaging Protocol, or AMP.
Each [Actor](Actor) in the network receives and broadcasts messages,
selectively disclosing new routes to peers which may have open circuits.

**Kind**: global class  

* [Message](#Message) : <code>Object</code>
    * [new Message(message)](#new_Message_new)
    * [.asRaw()](#Message+asRaw) ⇒ <code>Buffer</code>

<a name="new_Message_new"></a>

### new Message(message)
The `Message` type is standardized in [Fabric](#Fabric) as a [Vector](#Vector), which can be added to any other vector to compute a resulting state.


| Param | Type | Description |
| --- | --- | --- |
| message | [<code>Vector</code>](#Vector) | Message vector.  Will be serialized by [_serialize](#Vector+_serialize). |

<a name="Message+asRaw"></a>

### message.asRaw() ⇒ <code>Buffer</code>
Returns a [Buffer](Buffer) of the complete message.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Buffer</code> - Buffer of the encoded [Message](#Message).  
<a name="Oracle"></a>

## Oracle ⇐ [<code>Store</code>](#Store)
An Oracle manages one or more collections, using a <code>mempool</code> for
transitive state.

**Kind**: global class  
**Extends**: [<code>Store</code>](#Store)  

* [Oracle](#Oracle) ⇐ [<code>Store</code>](#Store)
    * [new Oracle(initial)](#new_Oracle_new)
    * [.broadcast(msg)](#Oracle+broadcast) ⇒ <code>Boolean</code>
    * [._REGISTER(obj)](#Store+_REGISTER) ⇒ [<code>Vector</code>](#Vector)
    * [._POST(key, value)](#Store+_POST) ⇒ <code>Promise</code>
    * [.get(key)](#Store+get) ⇒ <code>Promise</code>
    * [.set(key, value)](#Store+set)
    * [.trust(source)](#Store+trust) ⇒ [<code>Store</code>](#Store)
    * [.del(key)](#Store+del)
    * [.flush()](#Store+flush)
    * [.start()](#Store+start) ⇒ <code>Promise</code>

<a name="new_Oracle_new"></a>

### new Oracle(initial)
Trusted point-of-reference for external services.


| Param | Type | Description |
| --- | --- | --- |
| initial | <code>Object</code> | Initialization vector. |

<a name="Oracle+broadcast"></a>

### oracle.broadcast(msg) ⇒ <code>Boolean</code>
Core messaging function for interacting with this object in system-time.

**Kind**: instance method of [<code>Oracle</code>](#Oracle)  
**Returns**: <code>Boolean</code> - Returns `true` on success, `false` on failure.  

| Param | Type | Description |
| --- | --- | --- |
| msg | [<code>Message</code>](#Message) | Instance of a [module:Message](module:Message) object, validated then transmitted verbatim. |

<a name="Store+_REGISTER"></a>

### oracle.\_REGISTER(obj) ⇒ [<code>Vector</code>](#Vector)
Registers an [Actor](Actor).  Necessary to store in a collection.

**Kind**: instance method of [<code>Oracle</code>](#Oracle)  
**Returns**: [<code>Vector</code>](#Vector) - Returned from `storage.set`  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Instance of the object to store. |

<a name="Store+_POST"></a>

### oracle.\_POST(key, value) ⇒ <code>Promise</code>
Insert something into a collection.

**Kind**: instance method of [<code>Oracle</code>](#Oracle)  
**Returns**: <code>Promise</code> - Resolves on success with a String pointer.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Path to add data to. |
| value | <code>Mixed</code> | Object to store. |

<a name="Store+get"></a>

### oracle.get(key) ⇒ <code>Promise</code>
Barebones getter.

**Kind**: instance method of [<code>Oracle</code>](#Oracle)  
**Returns**: <code>Promise</code> - Resolves on complete.  `null` if not found.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Name of data to retrieve. |

<a name="Store+set"></a>

### oracle.set(key, value)
Set a `key` to a specific `value`.

**Kind**: instance method of [<code>Oracle</code>](#Oracle)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Address of the information. |
| value | <code>Mixed</code> | Content to store at `key`. |

<a name="Store+trust"></a>

### oracle.trust(source) ⇒ [<code>Store</code>](#Store)
Implicitly trust an [Event](Event) source.

**Kind**: instance method of [<code>Oracle</code>](#Oracle)  
**Returns**: [<code>Store</code>](#Store) - Resulting instance of [Store](#Store) with new trust.  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>EventEmitter</code> | Event-emitting source. |

<a name="Store+del"></a>

### oracle.del(key)
Remove a [Value](#Value) by [Path](#Path).

**Kind**: instance method of [<code>Oracle</code>](#Oracle)  

| Param | Type | Description |
| --- | --- | --- |
| key | [<code>Path</code>](#Path) | Key to remove. |

<a name="Store+flush"></a>

### oracle.flush()
Wipes the storage.

**Kind**: instance method of [<code>Oracle</code>](#Oracle)  
**Overrides**: [<code>flush</code>](#Store+flush)  
<a name="Store+start"></a>

### oracle.start() ⇒ <code>Promise</code>
Start running the process.

**Kind**: instance method of [<code>Oracle</code>](#Oracle)  
**Overrides**: [<code>start</code>](#Store+start)  
**Returns**: <code>Promise</code> - Resolves on complete.  
<a name="Path"></a>

## Path
A [Path](#Path) is a [Fabric](#Fabric)-native link to a [Document](Document)
within the network.

**Kind**: global class  

* [Path](#Path)
    * [new Path(input)](#new_Path_new)
    * [.isValid()](#Path+isValid) ⇒ <code>Boolean</code>

<a name="new_Path_new"></a>

### new Path(input)
Create a new [Path](#Path).


| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> \| <code>Object</code> | Named path. |

<a name="Path+isValid"></a>

### path.isValid() ⇒ <code>Boolean</code>
**Kind**: instance method of [<code>Path</code>](#Path)  
**Returns**: <code>Boolean</code> - Whether or not the Path is valid.  
<a name="Peer"></a>

## Peer
An in-memory representation of a node in our network.

**Kind**: global class  

* [Peer](#Peer)
    * [new Peer(config)](#new_Peer_new)
    * [.listen()](#Peer+listen) ⇒ [<code>Peer</code>](#Peer)

<a name="new_Peer_new"></a>

### new Peer(config)
Create an instance of [Peer](#Peer).


| Param | Type | Description |
| --- | --- | --- |
| config | [<code>Vector</code>](#Vector) | Initialization Vector for this peer. |

<a name="Peer+listen"></a>

### peer.listen() ⇒ [<code>Peer</code>](#Peer)
Start listening for connections.

**Kind**: instance method of [<code>Peer</code>](#Peer)  
**Returns**: [<code>Peer</code>](#Peer) - Chainable method.  
**Emits**: <code>Peer#event:ready</code>  
<a name="Remote"></a>

## Remote : [<code>Remote</code>](#Remote)
Interact with a remote [Resource](#Resource).

**Kind**: global class  
**Properties**

| Name | Type |
| --- | --- |
| config | <code>Object</code> | 
| secure | <code>Boolean</code> | 


* [Remote](#Remote) : [<code>Remote</code>](#Remote)
    * [new Remote(target)](#new_Remote_new)
    * [.enumerate()](#Remote+enumerate) ⇒ <code>Configuration</code>
    * [._PUT(path, body)](#Remote+_PUT) ⇒ <code>Mixed</code>
    * [._GET(path, params)](#Remote+_GET) ⇒ <code>Mixed</code>
    * [._POST(path, params)](#Remote+_POST) ⇒ <code>Mixed</code>
    * [._OPTIONS(path, params)](#Remote+_OPTIONS) ⇒ <code>Object</code>
    * [._PATCH(path, body)](#Remote+_PATCH) ⇒ <code>Object</code>
    * [._DELETE(path, params)](#Remote+_DELETE) ⇒ <code>Object</code>

<a name="new_Remote_new"></a>

### new Remote(target)
An in-memory representation of a node in our network.


| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | Target object. |
| target.host | <code>String</code> | Named host, e.g. "localhost". |
| target.secure | <code>String</code> | Require TLS session. |

<a name="Remote+enumerate"></a>

### remote.enumerate() ⇒ <code>Configuration</code>
Enumerate the available Resources on the remote host.

**Kind**: instance method of [<code>Remote</code>](#Remote)  
<a name="Remote+_PUT"></a>

### remote.\_PUT(path, body) ⇒ <code>Mixed</code>
HTTP PUT against the configured Authority.

**Kind**: instance method of [<code>Remote</code>](#Remote)  
**Returns**: <code>Mixed</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | HTTP Path to request. |
| body | <code>Object</code> | Map of parameters to supply. |

<a name="Remote+_GET"></a>

### remote.\_GET(path, params) ⇒ <code>Mixed</code>
HTTP GET against the configured Authority.

**Kind**: instance method of [<code>Remote</code>](#Remote)  
**Returns**: <code>Mixed</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | HTTP Path to request. |
| params | <code>Object</code> | Map of parameters to supply. |

<a name="Remote+_POST"></a>

### remote.\_POST(path, params) ⇒ <code>Mixed</code>
HTTP POST against the configured Authority.

**Kind**: instance method of [<code>Remote</code>](#Remote)  
**Returns**: <code>Mixed</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | HTTP Path to request. |
| params | <code>Object</code> | Map of parameters to supply. |

<a name="Remote+_OPTIONS"></a>

### remote.\_OPTIONS(path, params) ⇒ <code>Object</code>
HTTP OPTIONS on the configured Authority.

**Kind**: instance method of [<code>Remote</code>](#Remote)  
**Returns**: <code>Object</code> - - Full description of remote resource.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | HTTP Path to request. |
| params | <code>Object</code> | Map of parameters to supply. |

<a name="Remote+_PATCH"></a>

### remote.\_PATCH(path, body) ⇒ <code>Object</code>
HTTP PATCH on the configured Authority.

**Kind**: instance method of [<code>Remote</code>](#Remote)  
**Returns**: <code>Object</code> - - Full description of remote resource.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | HTTP Path to request. |
| body | <code>Object</code> | Map of parameters to supply. |

<a name="Remote+_DELETE"></a>

### remote.\_DELETE(path, params) ⇒ <code>Object</code>
HTTP DELETE on the configured Authority.

**Kind**: instance method of [<code>Remote</code>](#Remote)  
**Returns**: <code>Object</code> - - Full description of remote resource.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | HTTP Path to request. |
| params | <code>Object</code> | Map of parameters to supply. |

<a name="Resource"></a>

## Resource
Generic interface for collections of digital objects.

**Kind**: global class  

* [Resource](#Resource)
    * [new Resource(definition)](#new_Resource_new)
    * [.create(obj)](#Resource+create) ⇒ [<code>Vector</code>](#Vector)
    * [.update(id, update)](#Resource+update) ⇒ [<code>Vector</code>](#Vector)

<a name="new_Resource_new"></a>

### new Resource(definition)

| Param | Type | Description |
| --- | --- | --- |
| definition | <code>Object</code> | Initial parameters |

<a name="Resource+create"></a>

### resource.create(obj) ⇒ [<code>Vector</code>](#Vector)
Create an instance of the Resource's type.

**Kind**: instance method of [<code>Resource</code>](#Resource)  
**Returns**: [<code>Vector</code>](#Vector) - Resulting Vector with deterministic identifier.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Map of the instance's properties and values. |

<a name="Resource+update"></a>

### resource.update(id, update) ⇒ [<code>Vector</code>](#Vector)
Modify an existing instance of a Resource by its unique identifier.  Produces a new instance.

**Kind**: instance method of [<code>Resource</code>](#Resource)  
**Returns**: [<code>Vector</code>](#Vector) - Resulting Vector instance with updated identifier.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Unique ID to update. |
| update | <code>Object</code> | Map of change to make (keys -> values). |

<a name="Router"></a>

## Router ⇐ [<code>Scribe</code>](#Scribe)
Process incoming messages.

**Kind**: global class  
**Extends**: [<code>Scribe</code>](#Scribe)  

* [Router](#Router) ⇐ [<code>Scribe</code>](#Scribe)
    * [new Router(map)](#new_Router_new)
    * [.id](#State+id) : <code>Boolean</code>
    * [.route(msg)](#Router+route) ⇒ <code>Array</code>
    * [.use(plugin, name)](#Router+use) ⇒ [<code>Router</code>](#Router)
    * [.now()](#Scribe+now) ⇒ <code>Number</code>
    * [.trust(source)](#Scribe+trust) ⇒ [<code>Scribe</code>](#Scribe)
    * [.inherits(scribe)](#Scribe+inherits) ⇒ [<code>Scribe</code>](#Scribe)
    * [.toString()](#State+toString) ⇒ <code>String</code>
    * [.serialize([input])](#State+serialize) ⇒ <code>Buffer</code>
    * [.deserialize(input)](#State+deserialize) ⇒ [<code>State</code>](#State)
    * [.fork()](#State+fork) ⇒ [<code>State</code>](#State)
    * [.get(path)](#State+get) ⇒ <code>Mixed</code>
    * [.set(path)](#State+set) ⇒ <code>Mixed</code>
    * [.commit()](#State+commit)
    * [.render()](#State+render) ⇒ <code>String</code>

<a name="new_Router_new"></a>

### new Router(map)
Maintains a list of triggers ("commands") and their behaviors.


| Param | Type | Description |
| --- | --- | --- |
| map | <code>Object</code> | Map of command names => behaviors. |

<a name="State+id"></a>

### router.id : <code>Boolean</code>
Identity function.

**Kind**: instance property of [<code>Router</code>](#Router)  
<a name="Router+route"></a>

### router.route(msg) ⇒ <code>Array</code>
Assembles a list of possible responses to the incoming request.

**Kind**: instance method of [<code>Router</code>](#Router)  
**Returns**: <code>Array</code> - List of outputs generated from the input string.  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>String</code> | Input message to route. |

<a name="Router+use"></a>

### router.use(plugin, name) ⇒ [<code>Router</code>](#Router)
Attaches a new handler to the router.

**Kind**: instance method of [<code>Router</code>](#Router)  
**Returns**: [<code>Router</code>](#Router) - Configured instance of the router.  

| Param | Type | Description |
| --- | --- | --- |
| plugin | <code>Plugin</code> | Instance of the plugin. |
| name | <code>Plugin.name</code> | Name of the plugin. |

<a name="Scribe+now"></a>

### router.now() ⇒ <code>Number</code>
Retrives the current timestamp, in milliseconds.

**Kind**: instance method of [<code>Router</code>](#Router)  
**Returns**: <code>Number</code> - [Number](Number) representation of the millisecond [Integer](Integer) value.  
<a name="Scribe+trust"></a>

### router.trust(source) ⇒ [<code>Scribe</code>](#Scribe)
Blindly bind event handlers to the [Source](Source).

**Kind**: instance method of [<code>Router</code>](#Router)  
**Returns**: [<code>Scribe</code>](#Scribe) - Instance of the [Scribe](#Scribe).  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Source</code> | Event stream. |

<a name="Scribe+inherits"></a>

### router.inherits(scribe) ⇒ [<code>Scribe</code>](#Scribe)
Use an existing Scribe instance as a parent.

**Kind**: instance method of [<code>Router</code>](#Router)  
**Returns**: [<code>Scribe</code>](#Scribe) - The configured instance of the Scribe.  

| Param | Type | Description |
| --- | --- | --- |
| scribe | [<code>Scribe</code>](#Scribe) | Instance of Scribe to use as parent. |

<a name="State+toString"></a>

### router.toString() ⇒ <code>String</code>
Unmarshall an existing state to an instance of a [Blob](Blob).

**Kind**: instance method of [<code>Router</code>](#Router)  
**Returns**: <code>String</code> - Serialized [Blob](Blob).  
<a name="State+serialize"></a>

### router.serialize([input]) ⇒ <code>Buffer</code>
Convert to [Buffer](Buffer).

**Kind**: instance method of [<code>Router</code>](#Router)  
**Returns**: <code>Buffer</code> - [Store](#Store)-able blob.  

| Param | Type | Description |
| --- | --- | --- |
| [input] | <code>Mixed</code> | Input to serialize. |

<a name="State+deserialize"></a>

### router.deserialize(input) ⇒ [<code>State</code>](#State)
Take a hex-encoded input and convert to a [State](#State) object.

**Kind**: instance method of [<code>Router</code>](#Router)  
**Returns**: [<code>State</code>](#State) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | [description] |

<a name="State+fork"></a>

### router.fork() ⇒ [<code>State</code>](#State)
Creates a new child [State](#State), with `@parent` set to
the current [State](#State) by immutable identifier.

**Kind**: instance method of [<code>Router</code>](#Router)  
<a name="State+get"></a>

### router.get(path) ⇒ <code>Mixed</code>
Retrieve a key from the [State](#State).

**Kind**: instance method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| path | [<code>Path</code>](#Path) | Key to retrieve. |

<a name="State+set"></a>

### router.set(path) ⇒ <code>Mixed</code>
Set a key in the [State](#State) to a particular value.

**Kind**: instance method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| path | [<code>Path</code>](#Path) | Key to retrieve. |

<a name="State+commit"></a>

### router.commit()
Increment the vector clock, broadcast all changes as a transaction.

**Kind**: instance method of [<code>Router</code>](#Router)  
<a name="State+render"></a>

### router.render() ⇒ <code>String</code>
Compose a JSON string for network consumption.

**Kind**: instance method of [<code>Router</code>](#Router)  
**Returns**: <code>String</code> - JSON-encoded [String](String).  
<a name="Scribe"></a>

## Scribe ⇐ [<code>State</code>](#State)
Simple tag-based recordkeeper.

**Kind**: global class  
**Extends**: [<code>State</code>](#State)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Current configuration. |


* [Scribe](#Scribe) ⇐ [<code>State</code>](#State)
    * [new Scribe(config)](#new_Scribe_new)
    * [.id](#State+id) : <code>Boolean</code>
    * [.now()](#Scribe+now) ⇒ <code>Number</code>
    * [.trust(source)](#Scribe+trust) ⇒ [<code>Scribe</code>](#Scribe)
    * [.inherits(scribe)](#Scribe+inherits) ⇒ [<code>Scribe</code>](#Scribe)
    * [.toString()](#State+toString) ⇒ <code>String</code>
    * [.serialize([input])](#State+serialize) ⇒ <code>Buffer</code>
    * [.deserialize(input)](#State+deserialize) ⇒ [<code>State</code>](#State)
    * [.fork()](#State+fork) ⇒ [<code>State</code>](#State)
    * [.get(path)](#State+get) ⇒ <code>Mixed</code>
    * [.set(path)](#State+set) ⇒ <code>Mixed</code>
    * [.commit()](#State+commit)
    * [.render()](#State+render) ⇒ <code>String</code>

<a name="new_Scribe_new"></a>

### new Scribe(config)
The "Scribe" is a simple tag-based recordkeeper.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | General configuration object. |
| config.verbose | <code>Boolean</code> | Should the Scribe be noisy? |

<a name="State+id"></a>

### scribe.id : <code>Boolean</code>
Identity function.

**Kind**: instance property of [<code>Scribe</code>](#Scribe)  
<a name="Scribe+now"></a>

### scribe.now() ⇒ <code>Number</code>
Retrives the current timestamp, in milliseconds.

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  
**Returns**: <code>Number</code> - [Number](Number) representation of the millisecond [Integer](Integer) value.  
<a name="Scribe+trust"></a>

### scribe.trust(source) ⇒ [<code>Scribe</code>](#Scribe)
Blindly bind event handlers to the [Source](Source).

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  
**Returns**: [<code>Scribe</code>](#Scribe) - Instance of the [Scribe](#Scribe).  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Source</code> | Event stream. |

<a name="Scribe+inherits"></a>

### scribe.inherits(scribe) ⇒ [<code>Scribe</code>](#Scribe)
Use an existing Scribe instance as a parent.

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  
**Returns**: [<code>Scribe</code>](#Scribe) - The configured instance of the Scribe.  

| Param | Type | Description |
| --- | --- | --- |
| scribe | [<code>Scribe</code>](#Scribe) | Instance of Scribe to use as parent. |

<a name="State+toString"></a>

### scribe.toString() ⇒ <code>String</code>
Unmarshall an existing state to an instance of a [Blob](Blob).

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  
**Returns**: <code>String</code> - Serialized [Blob](Blob).  
<a name="State+serialize"></a>

### scribe.serialize([input]) ⇒ <code>Buffer</code>
Convert to [Buffer](Buffer).

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  
**Returns**: <code>Buffer</code> - [Store](#Store)-able blob.  

| Param | Type | Description |
| --- | --- | --- |
| [input] | <code>Mixed</code> | Input to serialize. |

<a name="State+deserialize"></a>

### scribe.deserialize(input) ⇒ [<code>State</code>](#State)
Take a hex-encoded input and convert to a [State](#State) object.

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  
**Returns**: [<code>State</code>](#State) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | [description] |

<a name="State+fork"></a>

### scribe.fork() ⇒ [<code>State</code>](#State)
Creates a new child [State](#State), with `@parent` set to
the current [State](#State) by immutable identifier.

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  
<a name="State+get"></a>

### scribe.get(path) ⇒ <code>Mixed</code>
Retrieve a key from the [State](#State).

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  

| Param | Type | Description |
| --- | --- | --- |
| path | [<code>Path</code>](#Path) | Key to retrieve. |

<a name="State+set"></a>

### scribe.set(path) ⇒ <code>Mixed</code>
Set a key in the [State](#State) to a particular value.

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  

| Param | Type | Description |
| --- | --- | --- |
| path | [<code>Path</code>](#Path) | Key to retrieve. |

<a name="State+commit"></a>

### scribe.commit()
Increment the vector clock, broadcast all changes as a transaction.

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  
<a name="State+render"></a>

### scribe.render() ⇒ <code>String</code>
Compose a JSON string for network consumption.

**Kind**: instance method of [<code>Scribe</code>](#Scribe)  
**Returns**: <code>String</code> - JSON-encoded [String](String).  
<a name="Script"></a>

## Script
**Kind**: global class  
<a name="new_Script_new"></a>

### new Script(config)
Compose a [Script](#Script) for inclusion within a [Contract](Contract).

**Returns**: [<code>Script</code>](#Script) - Instance of the [Script](#Script), ready for use.  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Mixed</code> | Configuration options for the script. |

<a name="Service"></a>

## Service
The "Service" is a simple model for processing messages in a distributed
system.  [Service](#Service) instances are public interfaces for outside systems,
and typically advertise their presence to the network.

To implement a Service, you will typically need to implement all methods from
this prototype.  In general, `connect` and `send` are the highest-priority
jobs, and by default the `fabric` property will serve as an I/O stream using
familiar semantics.

**Kind**: global class  
**Properties**

| Name | Description |
| --- | --- |
| map | The "map" is a hashtable of "key" => "value" pairs. |


* [Service](#Service)
    * [new Service(config)](#new_Service_new)
    * [.handler(message)](#Service+handler) ⇒ [<code>Service</code>](#Service)
    * [.route(msg)](#Service+route) ⇒ <code>Promise</code>
    * [.start()](#Service+start)
    * [._GET(path)](#Service+_GET) ⇒ <code>Promise</code>
    * [._PUT(path, value, [commit])](#Service+_PUT) ⇒ <code>Promise</code>
    * [.connect(notify)](#Service+connect) ⇒ <code>Promise</code>
    * [.send(channel, message)](#Service+send) ⇒ [<code>Service</code>](#Service)
    * [._registerActor(actor)](#Service+_registerActor) ⇒ <code>Promise</code>

<a name="new_Service_new"></a>

### new Service(config)
Create an instance of a Service.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>Object</code> |  | Configuration for this service. |
| [config.networking] | <code>Boolean</code> | <code>true</code> | Whether or not to connect to the network. |
| [config.@data] | <code>Object</code> |  | Internal data to assign. |

<a name="Service+handler"></a>

### service.handler(message) ⇒ [<code>Service</code>](#Service)
Default route handler for an incoming message.  Follows the Activity
Streams 2.0 spec: https://www.w3.org/TR/activitystreams-core/

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: [<code>Service</code>](#Service) - Chainable method.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>Activity</code> | Message object. |

<a name="Service+route"></a>

### service.route(msg) ⇒ <code>Promise</code>
Resolve a [State](#State) from a particular [Message](#Message) object.

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - Resolves with resulting [State](#State).  

| Param | Type | Description |
| --- | --- | --- |
| msg | [<code>Message</code>](#Message) | Explicit Fabric [Message](#Message). |

<a name="Service+start"></a>

### service.start()
Start the service, including the initiation of an outbound connection
to any peers designated in the service's configuration.

**Kind**: instance method of [<code>Service</code>](#Service)  
<a name="Service+_GET"></a>

### service.\_GET(path) ⇒ <code>Promise</code>
Retrieve a value from the Service's state.

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - Resolves with the result.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path of the value to retrieve. |

<a name="Service+_PUT"></a>

### service.\_PUT(path, value, [commit]) ⇒ <code>Promise</code>
Store a value in the Service's state.

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - Resolves with with stored document.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>String</code> |  | Path to store the value at. |
| value | <code>Object</code> |  | Document to store. |
| [commit] | <code>Boolean</code> | <code>false</code> | Sign the resulting state. |

<a name="Service+connect"></a>

### service.connect(notify) ⇒ <code>Promise</code>
Attach to network.

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - Resolves to [Fabric](#Fabric).  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| notify | <code>Boolean</code> | <code>true</code> | Commit to changes. |

<a name="Service+send"></a>

### service.send(channel, message) ⇒ [<code>Service</code>](#Service)
Send a message to a channel.

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: [<code>Service</code>](#Service) - Chainable method.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>String</code> | Channel name to which the message will be sent. |
| message | <code>String</code> | Content of the message to send. |

<a name="Service+_registerActor"></a>

### service.\_registerActor(actor) ⇒ <code>Promise</code>
Register an [Actor](Actor) with the [Service](#Service).

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - Resolves upon successful registration.  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>Object</code> | Instance of the [Actor](Actor). |

<a name="Session"></a>

## Session
The [Session](#Session) type describes a connection between [Peer](#Peer)
objects, and includes its own lifecycle.

**Kind**: global class  

* [Session](#Session)
    * [new Session(settings)](#new_Session_new)
    * [.start()](#Session+start)
    * [.stop()](#Session+stop)

<a name="new_Session_new"></a>

### new Session(settings)
Creates a new [Session](#Session).


| Param | Type |
| --- | --- |
| settings | <code>Object</code> | 

<a name="Session+start"></a>

### session.start()
Opens the [Session](#Session) for interaction.

**Kind**: instance method of [<code>Session</code>](#Session)  
<a name="Session+stop"></a>

### session.stop()
Closes the [Session](#Session), preventing further interaction.

**Kind**: instance method of [<code>Session</code>](#Session)  
<a name="Stack"></a>

## Stack
Manage stacks of data.

**Kind**: global class  

* [Stack](#Stack)
    * [new Stack([list])](#new_Stack_new)
    * [.push(data)](#Stack+push) ⇒ <code>Number</code>

<a name="new_Stack_new"></a>

### new Stack([list])
Create a [Stack](#Stack) instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [list] | <code>Array</code> | <code>[]</code> | Genesis state for the [Stack](#Stack) instance. |

<a name="Stack+push"></a>

### stack.push(data) ⇒ <code>Number</code>
Push data onto the stack.  Changes the [Stack#frame](Stack#frame) and
[Stack#id](Stack#id).

**Kind**: instance method of [<code>Stack</code>](#Stack)  
**Returns**: <code>Number</code> - Resulting size of the stack.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Mixed</code> | Treated as a [State](#State). |

<a name="State"></a>

## State
The [State](#State) is the core of most [User](User)-facing interactions.  To
interact with the [User](User), simply propose a change in the state by
committing to the outcome.  This workflow keeps app design quite simple!

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| size | <code>Number</code> | Size of state in bytes. |
| @buffer | <code>Buffer</code> | Byte-for-byte memory representation of state. |
| @type | <code>String</code> | Named type. |
| @data | <code>Mixed</code> | Local instance of the state. |
| @id | <code>String</code> | Unique identifier for this data. |


* [State](#State)
    * [new State(data)](#new_State_new)
    * _instance_
        * [.id](#State+id) : <code>Boolean</code>
        * [.toString()](#State+toString) ⇒ <code>String</code>
        * [.serialize([input])](#State+serialize) ⇒ <code>Buffer</code>
        * [.deserialize(input)](#State+deserialize) ⇒ [<code>State</code>](#State)
        * [.fork()](#State+fork) ⇒ [<code>State</code>](#State)
        * [.get(path)](#State+get) ⇒ <code>Mixed</code>
        * [.set(path)](#State+set) ⇒ <code>Mixed</code>
        * [.commit()](#State+commit)
        * [.render()](#State+render) ⇒ <code>String</code>
    * _static_
        * [.fromJSON(input)](#State.fromJSON) ⇒ [<code>State</code>](#State)

<a name="new_State_new"></a>

### new State(data)
Creates a snapshot of some information.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Mixed</code> | Input data. |

<a name="State+id"></a>

### state.id : <code>Boolean</code>
Identity function.

**Kind**: instance property of [<code>State</code>](#State)  
<a name="State+toString"></a>

### state.toString() ⇒ <code>String</code>
Unmarshall an existing state to an instance of a [Blob](Blob).

**Kind**: instance method of [<code>State</code>](#State)  
**Returns**: <code>String</code> - Serialized [Blob](Blob).  
<a name="State+serialize"></a>

### state.serialize([input]) ⇒ <code>Buffer</code>
Convert to [Buffer](Buffer).

**Kind**: instance method of [<code>State</code>](#State)  
**Returns**: <code>Buffer</code> - [Store](#Store)-able blob.  

| Param | Type | Description |
| --- | --- | --- |
| [input] | <code>Mixed</code> | Input to serialize. |

<a name="State+deserialize"></a>

### state.deserialize(input) ⇒ [<code>State</code>](#State)
Take a hex-encoded input and convert to a [State](#State) object.

**Kind**: instance method of [<code>State</code>](#State)  
**Returns**: [<code>State</code>](#State) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | [description] |

<a name="State+fork"></a>

### state.fork() ⇒ [<code>State</code>](#State)
Creates a new child [State](#State), with `@parent` set to
the current [State](#State) by immutable identifier.

**Kind**: instance method of [<code>State</code>](#State)  
<a name="State+get"></a>

### state.get(path) ⇒ <code>Mixed</code>
Retrieve a key from the [State](#State).

**Kind**: instance method of [<code>State</code>](#State)  

| Param | Type | Description |
| --- | --- | --- |
| path | [<code>Path</code>](#Path) | Key to retrieve. |

<a name="State+set"></a>

### state.set(path) ⇒ <code>Mixed</code>
Set a key in the [State](#State) to a particular value.

**Kind**: instance method of [<code>State</code>](#State)  

| Param | Type | Description |
| --- | --- | --- |
| path | [<code>Path</code>](#Path) | Key to retrieve. |

<a name="State+commit"></a>

### state.commit()
Increment the vector clock, broadcast all changes as a transaction.

**Kind**: instance method of [<code>State</code>](#State)  
<a name="State+render"></a>

### state.render() ⇒ <code>String</code>
Compose a JSON string for network consumption.

**Kind**: instance method of [<code>State</code>](#State)  
**Returns**: <code>String</code> - JSON-encoded [String](String).  
<a name="State.fromJSON"></a>

### State.fromJSON(input) ⇒ [<code>State</code>](#State)
Marshall an input into an instance of a [State](#State).  States have
absolute authority over their own domain, so choose your States wisely.

**Kind**: static method of [<code>State</code>](#State)  
**Returns**: [<code>State</code>](#State) - Resulting instance of the [State](#State).  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | Arbitrary input. |

<a name="Storage"></a>

## Storage
Persistent data storage.

**Kind**: global class  
<a name="new_Storage_new"></a>

### new Storage(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Configuration for internal datastore. |

<a name="Store"></a>

## Store
Long-term storage.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| settings | <code>Mixed</code> | Current configuration. |


* [Store](#Store)
    * [new Store([settings])](#new_Store_new)
    * [._REGISTER(obj)](#Store+_REGISTER) ⇒ [<code>Vector</code>](#Vector)
    * [._POST(key, value)](#Store+_POST) ⇒ <code>Promise</code>
    * [.get(key)](#Store+get) ⇒ <code>Promise</code>
    * [.set(key, value)](#Store+set)
    * [.trust(source)](#Store+trust) ⇒ [<code>Store</code>](#Store)
    * [.del(key)](#Store+del)
    * [.flush()](#Store+flush)
    * [.start()](#Store+start) ⇒ <code>Promise</code>

<a name="new_Store_new"></a>

### new Store([settings])
Create an instance of a [Store](#Store) to manage long-term storage, which is
particularly useful when building a user-facing [Product](Product).


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [settings] | <code>Object</code> | <code>{}</code> | configuration object. |

<a name="Store+_REGISTER"></a>

### store.\_REGISTER(obj) ⇒ [<code>Vector</code>](#Vector)
Registers an [Actor](Actor).  Necessary to store in a collection.

**Kind**: instance method of [<code>Store</code>](#Store)  
**Returns**: [<code>Vector</code>](#Vector) - Returned from `storage.set`  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Instance of the object to store. |

<a name="Store+_POST"></a>

### store.\_POST(key, value) ⇒ <code>Promise</code>
Insert something into a collection.

**Kind**: instance method of [<code>Store</code>](#Store)  
**Returns**: <code>Promise</code> - Resolves on success with a String pointer.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Path to add data to. |
| value | <code>Mixed</code> | Object to store. |

<a name="Store+get"></a>

### store.get(key) ⇒ <code>Promise</code>
Barebones getter.

**Kind**: instance method of [<code>Store</code>](#Store)  
**Returns**: <code>Promise</code> - Resolves on complete.  `null` if not found.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Name of data to retrieve. |

<a name="Store+set"></a>

### store.set(key, value)
Set a `key` to a specific `value`.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Address of the information. |
| value | <code>Mixed</code> | Content to store at `key`. |

<a name="Store+trust"></a>

### store.trust(source) ⇒ [<code>Store</code>](#Store)
Implicitly trust an [Event](Event) source.

**Kind**: instance method of [<code>Store</code>](#Store)  
**Returns**: [<code>Store</code>](#Store) - Resulting instance of [Store](#Store) with new trust.  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>EventEmitter</code> | Event-emitting source. |

<a name="Store+del"></a>

### store.del(key)
Remove a [Value](#Value) by [Path](#Path).

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| key | [<code>Path</code>](#Path) | Key to remove. |

<a name="Store+flush"></a>

### store.flush()
Wipes the storage.

**Kind**: instance method of [<code>Store</code>](#Store)  
<a name="Store+start"></a>

### store.start() ⇒ <code>Promise</code>
Start running the process.

**Kind**: instance method of [<code>Store</code>](#Store)  
**Returns**: <code>Promise</code> - Resolves on complete.  
<a name="Swap"></a>

## Swap : <code>Object</code>
The [Swap](#Swap) contract executes a set of transactions on two distinct
[Chain](#Chain) components, utilizing a secret-reveal mechanism to atomically
execute either the full set or none.

**Kind**: global class  

* [Swap](#Swap) : <code>Object</code>
    * [new Swap([settings])](#new_Swap_new)
    * [.extractSecret(tx, address)](#Swap+extractSecret) ⇒ <code>Mixed</code>

<a name="new_Swap_new"></a>

### new Swap([settings])
Atomically execute a set of transactions across two [Chain](#Chain) components.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [settings] | <code>Object</code> | <code>{}</code> | Configuration for the swap. |

<a name="Swap+extractSecret"></a>

### swap.extractSecret(tx, address) ⇒ <code>Mixed</code>
Find an input from the provided transaction which spends from the target
P2SH address.

**Kind**: instance method of [<code>Swap</code>](#Swap)  
**Returns**: <code>Mixed</code> - False on failure, secret value on success.  

| Param | Type | Description |
| --- | --- | --- |
| tx | <code>Transaction</code> | [Transaction](Transaction) to iterate over. |
| address | <code>String</code> | P2SH address to search for. |

<a name="Swarm"></a>

## Swarm : <code>String</code>
Orchestrates a network of peers.

**Kind**: global class  

* [Swarm](#Swarm) : <code>String</code>
    * [new Swarm(config)](#new_Swarm_new)
    * [.trust(source)](#Swarm+trust)
    * [.start()](#Swarm+start) ⇒ <code>Promise</code>

<a name="new_Swarm_new"></a>

### new Swarm(config)
Create an instance of a [Swarm](#Swarm).


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Configuration object. |

<a name="Swarm+trust"></a>

### swarm.trust(source)
Explicitly trust an [EventEmitter](EventEmitter) to provide messages using
the expected [Interface](#Interface), providing [Message](#Message) objects as
the expected [Type](Type).

**Kind**: instance method of [<code>Swarm</code>](#Swarm)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>EventEmitter</code> | [Actor](Actor) to utilize. |

<a name="Swarm+start"></a>

### swarm.start() ⇒ <code>Promise</code>
Begin computing.

**Kind**: instance method of [<code>Swarm</code>](#Swarm)  
**Returns**: <code>Promise</code> - Resolves to instance of [Swarm](#Swarm).  
<a name="Transition"></a>

## Transition
The [Transition](#Transition) type reflects a change from one finite
[State](#State) to another.

**Kind**: global class  
<a name="new_Transition_new"></a>

### new Transition(settings)

| Param | Type | Description |
| --- | --- | --- |
| settings | <code>Object</code> | Configuration for the transition object. |

<a name="Value"></a>

## Value
[Number](Number)-like type.

**Kind**: global class  

* [Value](#Value)
    * [new Value(data)](#new_Value_new)
    * [.value(input)](#Value+value)

<a name="new_Value_new"></a>

### new Value(data)
Use the [Value](#Value) type to interact with [Number](Number)-like objects.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Mixed</code> | Input value. |

<a name="Value+value"></a>

### value.value(input)
Compute the numeric representation of this input.

**Kind**: instance method of [<code>Value</code>](#Value)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | Input string to seek for value. |

<a name="Vector"></a>

## Vector
**Kind**: global class  

* [Vector](#Vector)
    * [new Vector(origin)](#new_Vector_new)
    * [._serialize(input)](#Vector+_serialize) ⇒ <code>String</code>
    * [.toString(input)](#Vector+toString) ⇒ <code>String</code>

<a name="new_Vector_new"></a>

### new Vector(origin)
An "Initialization" Vector.


| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Object</code> | Input state (will map to `@data`.) |

<a name="Vector+_serialize"></a>

### vector.\_serialize(input) ⇒ <code>String</code>
_serialize is a placeholder, should be discussed.

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>String</code> - - resulting string [JSON-encoded version of the local `@data` value.]  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | What to serialize.  Defaults to `this.state`. |

<a name="Vector+toString"></a>

### vector.toString(input) ⇒ <code>String</code>
Render the output to a [String](String).

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Mixed</code> | Arbitrary input. |

<a name="Walker"></a>

## Walker
**Kind**: global class  

* [Walker](#Walker)
    * [new Walker(init)](#new_Walker_new)
    * [._explore(path, [map])](#Walker+_explore) ⇒ <code>Object</code>
    * [._define(dir, [map])](#Walker+_define) ⇒ <code>Object</code>

<a name="new_Walker_new"></a>

### new Walker(init)
The Walker explores a directory tree and maps it to memory.


| Param | Type | Description |
| --- | --- | --- |
| init | [<code>Vector</code>](#Vector) | Initial state tree. |

<a name="Walker+_explore"></a>

### walker.\_explore(path, [map]) ⇒ <code>Object</code>
Explores a directory tree on the local system's disk.

**Kind**: instance method of [<code>Walker</code>](#Walker)  
**Returns**: <code>Object</code> - [description]  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>String</code> |  | [description] |
| [map] | <code>Object</code> | <code>{}</code> | [description] |

<a name="Walker+_define"></a>

### walker.\_define(dir, [map]) ⇒ <code>Object</code>
Explores a directory tree on the local system's disk.

**Kind**: instance method of [<code>Walker</code>](#Walker)  
**Returns**: <code>Object</code> - A hashmap of directory contents.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dir | <code>String</code> |  | Path to crawl on local disk. |
| [map] | <code>Object</code> | <code>{}</code> | Pointer to previous step in stack. |

<a name="Wallet"></a>

## Wallet : <code>Object</code>
Manage keys and track their balances.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Unique identifier for this [Wallet](#Wallet). |


* [Wallet](#Wallet) : <code>Object</code>
    * [new Wallet([settings])](#new_Wallet_new)
    * [.getAddressForScript(script)](#Wallet+getAddressForScript)
    * [.getAddressFromRedeemScript(redeemScript)](#Wallet+getAddressFromRedeemScript)
    * [.createPricedOrder(order)](#Wallet+createPricedOrder)
    * [._sign(tx)](#Wallet+_sign)
    * [._createCrowdfund(fund)](#Wallet+_createCrowdfund)
    * [._getSwapInputScript(redeemScript, secret)](#Wallet+_getSwapInputScript)
    * [._getRefundInputScript(redeemScript)](#Wallet+_getRefundInputScript)
    * [._load(settings)](#Wallet+_load)
    * [.start()](#Wallet+start)

<a name="new_Wallet_new"></a>

### new Wallet([settings])
Create an instance of a [Wallet](#Wallet).


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [settings] | <code>Object</code> | <code>{}</code> | Configure the wallet. |
| [settings.verbosity] | <code>Number</code> | <code>2</code> | One of: 0 (none), 1 (error), 2 (warning), 3 (notice), 4 (debug), 5 (audit) |
| [settings.key] | <code>Object</code> |  | Key to restore from. |
| [settings.key.seed] | <code>String</code> |  | Mnemonic seed for a restored wallet. |

<a name="Wallet+getAddressForScript"></a>

### wallet.getAddressForScript(script)
Returns a bech32 address for the provided [Script](#Script).

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  

| Param | Type |
| --- | --- |
| script | [<code>Script</code>](#Script) | 

<a name="Wallet+getAddressFromRedeemScript"></a>

### wallet.getAddressFromRedeemScript(redeemScript)
Generate a [BitcoinAddress](BitcoinAddress) for the supplied [BitcoinScript](BitcoinScript).

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  

| Param | Type |
| --- | --- |
| redeemScript | <code>BitcoinScript</code> | 

<a name="Wallet+createPricedOrder"></a>

### wallet.createPricedOrder(order)
Create a priced order.

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  

| Param | Type |
| --- | --- |
| order | <code>Object</code> | 
| order.asset | <code>Object</code> | 
| order.amount | <code>Object</code> | 

<a name="Wallet+_sign"></a>

### wallet.\_sign(tx)
Signs a transaction with the keyring.

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  

| Param | Type |
| --- | --- |
| tx | <code>BcoinTX</code> | 

<a name="Wallet+_createCrowdfund"></a>

### wallet.\_createCrowdfund(fund)
Create a crowdfunding transaction.

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  

| Param | Type |
| --- | --- |
| fund | <code>Object</code> | 

<a name="Wallet+_getSwapInputScript"></a>

### wallet.\_getSwapInputScript(redeemScript, secret)
Generate [Script](#Script) for claiming a [Swap](#Swap).

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  

| Param | Type |
| --- | --- |
| redeemScript | <code>\*</code> | 
| secret | <code>\*</code> | 

<a name="Wallet+_getRefundInputScript"></a>

### wallet.\_getRefundInputScript(redeemScript)
Generate [Script](#Script) for reclaiming funds commited to a [Swap](#Swap).

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  

| Param | Type |
| --- | --- |
| redeemScript | <code>\*</code> | 

<a name="Wallet+_load"></a>

### wallet.\_load(settings)
Initialize the wallet, including keys and addresses.

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  

| Param | Type |
| --- | --- |
| settings | <code>Object</code> | 

<a name="Wallet+start"></a>

### wallet.start()
Start the wallet, including listening for transactions.

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  
<a name="Worker"></a>

## Worker
Workers are arbitrary containers for processing data.  They can be thought of
almost like "threads", as they run asynchronously over the duration of a
contract's lifetime as "fulfillment conditions" for its closure.

**Kind**: global class  

* [Worker](#Worker)
    * [new Worker(method)](#new_Worker_new)
    * [.compute(input)](#Worker+compute) ⇒ <code>String</code>

<a name="new_Worker_new"></a>

### new Worker(method)

| Param | Type | Description |
| --- | --- | --- |
| method | <code>function</code> | Pure function. |

<a name="Worker+compute"></a>

### worker.compute(input) ⇒ <code>String</code>
Handle a task.

**Kind**: instance method of [<code>Worker</code>](#Worker)  
**Returns**: <code>String</code> - Outcome of the requested job.  

| Param | Type | Description |
| --- | --- | --- |
| input | [<code>Vector</code>](#Vector) | Input vector. |

