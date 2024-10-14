# Access control banner

Access control banners are used to display information about the page access restrictions. They are an enhancement of the banner that is found within the [header component](header.md), and thus are placed inside `<header class="global-header">`.

Different types of access control banners are available, using different classes:

- `.banner--access-control.acl-member` - for member-only pages
- `.banner--access-control.acl-team` - for team-only pages
- `.banner--access-control.acl-user` - for pages restricted to the current user
- `.banner--access-control.acl-private` - for other access control restrictions

<example title="Access Control" src="components/access-control.html.twig" />