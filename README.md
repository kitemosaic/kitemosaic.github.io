# KiteMosaic website

Public information for KiteMosaic games. This repository contains website content, not the Red Blue Tap Android source code.

## Pages

- Developer website: https://kitemosaic.github.io/
- Red Blue Tap: https://kitemosaic.github.io/redbluetap/
- Privacy policy: https://kitemosaic.github.io/redbluetap/privacy.html

The site uses plain HTML and CSS. There is no build step, JavaScript, analytics integration or externally loaded font. Enable GitHub Pages from `main`, `/(root)`, using **Deploy from a branch** if it is not already enabled.

## Red Blue Tap theme

The two Red Blue Tap pages use the approved app light palette: lavender-blue skies, an aqua glow, layered clouds, muted teal leaves and small stars. The game title and question mark use DynaPuff Semibold; the tagline uses Fredoka Semibold. Privacy text uses the system font. The shared developer home page keeps its existing styling.

All decorative motion is CSS-only, ends within five seconds and respects reduced-motion preferences. The policy has desktop contents navigation, a single-column mobile layout and print styles. No build step or JavaScript is needed.

The original variable font files and complete SIL Open Font License notices are bundled in `redbluetap/assets/fonts/`. Sources: [DynaPuff](https://github.com/google/fonts/tree/83c62e30d87daa70216dab6b984d00d20d96d585/ofl/dynapuff) and [Fredoka](https://github.com/google/fonts/tree/83c62e30d87daa70216dab6b984d00d20d96d585/ofl/fredoka). Fonts are served by this site, with no request to Google Fonts. The decorative sky is an original SVG adaptation of the app theme.

## Keeping the privacy policy accurate

The policy dated 24 November 2026 reflects the app implementation reports supplied by the developer: local game records and reminder timing, Google AdMob Next-Gen and UMP, no game accounts or developer gameplay backend, and an intended audience of ages 13 and over. The public privacy contact is `kitemosaic@gmail.com`.

Keep this page, the in-app privacy link, Play Data safety answers and actual release behaviour aligned. Review changes to SDKs, permissions, advertising partners, consent settings, audience treatment, backup behaviour and deletion controls before release. The current Google SDK disclosure describes its latest SDK; it is not a binary audit of the previously reported version installed in the app. The policy does not certify Google Play Families or age-related advertising compliance.

The policy distinguishes clearing cache from clearing storage, limited history deletion from a complete local reset, and deleting local records from deletion of provider-held information. Support-message retention is based on the purpose and legal needs described in the policy, not an invented fixed period.

For UK/EEA transparency, the policy identifies legitimate interests for limited local game/reminder processing and support/operational information. Those interests are providing the requested game, remembering choices, making permitted reminders useful and answering support requests. The local processing is confined to this app, is not uploaded, and is not used for advertising. The developer should maintain the necessary assessment of those interests, especially for younger players, and revisit it if the behaviour changes. Android notification permission is not treated as consent for advertising or other unrelated processing. Consent-dependent provider processing remains subject to the applicable privacy choices.

## AdMob app-ads.txt

When the exact authorised seller entry is available from KiteMosaic's AdMob account, place `app-ads.txt` at the repository root so it is served at `https://kitemosaic.github.io/app-ads.txt`. Use the actual publisher ID supplied by AdMob. No placeholder or sample publisher entry is published here.

## Copyright

© 2026 KiteMosaic. All rights reserved. No open-source licence is granted for the original site content. Any third-party material retains its applicable terms.
