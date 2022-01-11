# Call of Duty Gun Translater

When reading patch notes for Call of Duty, it can be confusing to read a mix of code names and common names. I don't really care what the reasoning is behind the two references, but until that's not longer a thing this [bookmarklet](https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks) will help translate the guns to use their common name.

## How to Use

All modern browsers allow you to use JavaScript content as bookmark content, which will execute on the currently-opened webpage when selected. You can either download the source code yourself and generate the bookmarklet, or copy/pase from the latest release. Stay frosty!

## TODO

- Github Issues instead of README TODOs?
- Summarize how a [JavaScript TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/Treewalker) works
  - Eventually upgrade to something more robust that will catch text everywhere, as this will miss anything that has other content in a [Text node](https://developer.mozilla.org/en-US/docs/Web/API/Text). I'm a little wary to just run [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) on the entire document content
- Add automatic builds/releases
  - Generate a release
- Document dependencies and build process
- Map all gun name
- Maybe convert the internal bookmarklet "plugin" into an external dependency that can be used across the RollupJS ecosystem (N.B will need to add checks for the `iife` output as I don't think anyything else will work as a bookmarklet)
