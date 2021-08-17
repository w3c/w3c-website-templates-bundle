# Cluster

The cluster layout suits any group of elements that differ in length, are liable to wrap and need even spacing between them, e.g. lists of tags or groups of buttons. It uses the class `.l-cluster`.

The cluster layout needs an inner flexbox container - in the following example it's provided by the `<ul>`. Flexbox gives us control of the alignment of items inside.

The cluster items - `<li>` in this example - sit within this container. Each item has a margin on all sides.

The flexbox container has a negative margin of the same size as the cluster items, creating even spacing between them. `overflow: hidden;` is used to tidy up the edges.

```
<div class="l-cluster">
    <ul class="clean-list">
        <li><a href="#1">Item One</a></li>
        <li><a href="#2">Item Two</a></li>
        <li><a href="#3">Item Three</a></li>
        <li><a href="#4">Item Four</a></li>
        <li><a href="#5">Item Five</a></li>
        <li><a href="#6">Item Six</a></li>
        <li><a href="#7">Item Seven</a></li>
        <li><a href="#8">Item Eight</a></li>
        <li><a href="#9">Item Nine</a></li>
        <li><a href="#10">Item Ten</a></li>
    </ul>
</div>
```