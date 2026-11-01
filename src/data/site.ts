/**
 * Everything on the page that is content rather than layout lives here,
 * so the .astro files stay pure markup.
 */

export const site = {
  title: '0x3639',
  description: 'Contact 0x3639',
  url: 'https://0x3639.com',
  repo: 'https://github.com/0x3639/0x3639.github.io',
};

export const nav = [
  { href: '#contact', label: 'contact' },
  { href: '#pgp', label: 'pgp_key' },
  { href: '#simplex', label: 'simplex' },
  { href: '#links', label: 'links' },
  { href: '#source', label: 'source' },
];

export type Contact = {
  channel: string;
  label: string;
  href?: string;
  tag?: string;
};

export const contacts: Contact[] = [
  { channel: 'Telegram', label: '@ZeroX3639', href: 'https://t.me/ZeroX3639' },
  { channel: 'X / Twitter', label: 'x.com/0x3639', href: 'https://x.com/0x3639' },
  {
    channel: 'Forum',
    label: 'forum.hypercore.one/u/0x3639',
    href: 'https://forum.hypercore.one/u/0x3639/',
  },
  { channel: 'Email', label: '0x3639 (at) protonmail (dot) com', tag: 'PGP PREFERRED' },
  { channel: 'SimpleX', label: 'scan the QR below', href: '#simplex', tag: 'NO IDENTIFIERS' },
];

export const pgp = {
  fingerprint: '310A 0EAE A844 9754 CF17 E8BB F6B8 2D11 5587 9DAB',
  keyId: '0xF6B82D1155879DAB',
  uid: '0x3639@protonmail.com',
  type: 'ed25519 / cv25519',
  created: '2022-07-04',
  ascPath: '/0x3639.asc',
  keyserver: 'https://keys.openpgp.org/search?q=0xF6B82D1155879DAB',
  armored: `-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEYsLNbRYJKwYBBAHaRw8BAQdAZYHTAkHadBhSk2lHH/r40zZrCWcCzEoe
f2UlYfCLECPNLTB4MzYzOUBwcm90b25tYWlsLmNvbSA8MHgzNjM5QHByb3Rv
bm1haWwuY29tPsKPBBAWCgAgBQJiws1tBgsJBwgDAgQVCAoCBBYCAQACGQEC
GwMCHgEAIQkQ9rgtEVWHnasWIQQxCg6uqESXVM8X6Lv2uC0RVYedqxSJAP9P
Pi7IWNJwSdDFE0bbhHEv9iFLPpiL0HA04LimiunSKQEA0oeLbs/F3qCLVCOk
cjEl5W6plDk4LSQNeTWIvSUa7Q3OOARiws1tEgorBgEEAZdVAQUBAQdA+5ZC
XgKoYwlWk/YnUpUXmzNu4WzG8NbEv/F4OQzqcA0DAQgHwngEGBYIAAkFAmLC
zW0CGwwAIQkQ9rgtEVWHnasWIQQxCg6uqESXVM8X6Lv2uC0RVYedqxr3AQD0
sJJgMQrpXdNo/vildydKyMq9UBjYVwEbcsK0dh85UQD/QO/x9WxrmuPJZD1t
XiDNkL0IxdYLMV6wOzI7J3RA8Ag=
=3ZXJ
-----END PGP PUBLIC KEY BLOCK-----`,
};

export const simplex = {
  qr: '/simplex-0x3639.png',
  headline: 'No phone number. No user ID. No metadata.',
  body:
    'Scan with the SimpleX app to open a direct channel. Messages are end-to-end encrypted and routed through relays that cannot see who is talking to whom.',
  url: 'https://simplex.chat',
};

export const links = [
  { label: 'Zenon', text: 'zenon.network', href: 'https://zenon.network' },
  { label: 'Forum', text: 'forum.hypercore.one', href: 'https://forum.hypercore.one' },
  { label: 'Code', text: 'github.com/zenon-network', href: 'https://github.com/zenon-network' },
];
