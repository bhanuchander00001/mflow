# site-deployment Specification

## Purpose

Defines what the build and deployment pipeline must guarantee so the site
can be published to, and correctly served from, GitHub Pages with good
performance and SEO characteristics.

## Requirements

### Requirement: GitHub Pages-compatible build
The system SHALL produce a static build whose asset URLs resolve correctly
when the site is served from a GitHub Pages project path (a non-root base
path), via a configurable Vite `base` setting.

#### Scenario: Built assets resolve under a subpath
- **WHEN** the site is built with the GitHub Pages project base path
  configured and served from that subpath
- **THEN** all CSS, JS, and image assets load successfully (no 404s caused
  by absolute root-relative paths)

### Requirement: Client-side routing works on Pages
The system SHALL ensure that directly loading or refreshing a deep route
(e.g. `/privacy`) on GitHub Pages does not produce a raw 404 from the host,
by providing an appropriate fallback (e.g. a `404.html` redirect strategy
compatible with GitHub Pages' static hosting model).

#### Scenario: Hard refresh on a deep route
- **WHEN** a visitor directly requests `/privacy` on the deployed GitHub
  Pages site (not via in-app navigation)
- **THEN** the MFlow Privacy Policy page is displayed rather than GitHub's
  generic 404 page

### Requirement: Automated deployment
The system SHALL define an automated workflow that builds the site and
publishes the build output to GitHub Pages on pushes to the main branch.

#### Scenario: Push to main triggers a deploy
- **WHEN** a commit is pushed to the repository's main branch
- **THEN** the CI workflow builds the site and publishes the resulting
  static output to the GitHub Pages hosting branch/environment without
  manual intervention

### Requirement: Discoverability metadata
The system SHALL provide a `robots.txt` permitting indexing, and each page
SHALL provide a unique `<title>`, meta description, and Open Graph tags
describing that page.

#### Scenario: Search engine crawls the site
- **WHEN** a crawler requests `/robots.txt`
- **THEN** crawling and indexing of the site is permitted

#### Scenario: Page-specific metadata
- **WHEN** any of `/`, `/privacy`, `/support`, or `/terms` is loaded
- **THEN** the document `<title>` and meta description are specific to that
  page's content (not a single generic value shared by all pages)

### Requirement: Documented deployment steps
The project README SHALL document how to configure the base path, build the
project, and deploy it to GitHub Pages, so a maintainer unfamiliar with the
setup can publish the site from a clean checkout.

#### Scenario: New maintainer follows the README
- **WHEN** a maintainer with no prior context follows the README's
  deployment section
- **THEN** they can successfully build and publish the site to GitHub Pages
  using only the documented steps
