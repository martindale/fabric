# Two-Way Links on the Web
## An Introduction to Channels
The Web we know today is built on a simple construct: the <code>&lt;a&gt;</code>
tag.  In <abbr title="Hyper Text Markup Language">HTML</abbr>, the <code>a</code> stands for anchor — a point of reference, or _hyperlink_.

Using these _hyperlinks_, we've been able to navigate content published on the
web _contextually_ — that is to say, we can choose to dig deeper into a "linked"
subject based on the context provided.  This has proven helpful to the curious
explorer, as the Web opened up the wealth of human knowledge to a greater extent
than ever before.

But what of the two-way conversation?  How can a reader submit an improvement to
the author's content in a meaningful way?  How can a publisher expect to be
notified of reader feedback, in comment form or even a proposal?  How can we
collaborate on content constructively?

_Channels_ are duplex communication streams between objects in Fabric.  They are
exposed to the user as _Subscriptions_, as channels typically involve an
exchange of value.

### Channel Mechanics
Following a `Channel` creates a `Subscription` object, which contains a
commitment to the contract specified in the `Channel`.  At any point in time,
the signatory for the `Channel` may "settle" the contract, claiming the funds
agreed upon as per the series of events (_Operations_) sent across the
`Channel`.

Similarly, the subscriber (creator of the `Subscription` object) may settle the
contract at any time, closing out any further agreements by broadcasting the
latest commitment to the channel.

A simple algorithm is proposed for computing trust between peers, using
quadratic expansion to compose a stable network over long periods of time.
