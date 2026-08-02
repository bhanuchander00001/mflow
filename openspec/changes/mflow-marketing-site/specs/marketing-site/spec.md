## Purpose

Defines the routed pages, navigation, and content the MFlow marketing site
must present to visitors, so the site explains the product, satisfies Play
Store legal-page requirements, and gives users a support path.

## ADDED Requirements

### Requirement: Landing page hero
The system SHALL render a landing page at `/` whose hero section displays the
product name "MFlow", the tagline "Track. Budget. Prosper.", a subtitle
summarizing the private/AI-assisted/on-device value proposition, and a "Download
on Google Play" call-to-action.

#### Scenario: First paint of the landing page
- **WHEN** a visitor loads `/`
- **THEN** the hero headline "MFlow", the tagline, the subtitle copy, and the
  "Download on Google Play" button are all visible above the fold without
  scrolling on a standard desktop viewport

### Requirement: Feature grid
The landing page SHALL present a grid of feature cards covering: Automatic
SMS Detection, AI Assisted Categorization, Privacy First, Offline First,
Budgets, Reports, Analytics, Gmail Import, Backup & Restore, Recurring
Expenses, Merchant Learning, and Approval Queue.

#### Scenario: All features are enumerated
- **WHEN** a visitor scrolls to the features section
- **THEN** all 12 named features are each represented by a distinct card
  with an icon, a title, and a one- or two-sentence description

### Requirement: "Why MFlow" section
The landing page SHALL present reasons to trust the product: Offline First,
Privacy First, No Ads, No Tracking, AI Learning, Indian Banking Support, and
Future Cloud Sync.

#### Scenario: Trust section renders all reasons
- **WHEN** a visitor scrolls to the "Why MFlow" section
- **THEN** all 7 reasons are visible as distinct items

### Requirement: Global navigation
Every page SHALL share a sticky top navigation bar containing the MFlow logo
(linking to `/`), links to the Features and Why-MFlow sections on the landing
page, links to Privacy (`/privacy`) and Support (`/support`), and a Download
call-to-action button.

#### Scenario: Navbar stays visible while scrolling
- **WHEN** a visitor scrolls down any page
- **THEN** the navigation bar remains fixed to the top of the viewport and
  remains legible over page content

#### Scenario: Navbar link navigates correctly
- **WHEN** a visitor clicks "Privacy" or "Support" in the navbar from any page
- **THEN** the router navigates to `/privacy` or `/support` respectively

### Requirement: Global footer
Every page SHALL share a footer containing the MFlow logo, links to Privacy
Policy, Terms, Support, and the project's GitHub repository, plus a copyright
line with the current year.

#### Scenario: Footer present on every route
- **WHEN** a visitor is on `/`, `/privacy`, `/support`, `/terms`, or an
  unmatched route
- **THEN** the shared footer with all required links is rendered

### Requirement: Privacy Policy page
The system SHALL provide a `/privacy` route with a complete privacy policy
covering: introduction, information collected (SMS permission, Gmail
permission, manual transactions), AI processing, how data is used, offline
storage, internet usage, data sharing, security, backup & restore,
permissions, children's privacy, changes to the policy, the Google API
Limited Use Statement, and a contact method. It SHALL explicitly state that
SMS processing happens entirely on-device, SMS is never uploaded, Gmail
access is optional, and that there are no advertisements, no analytics, no
tracking, and no selling of user data, and that auto-approved transactions
remain user-editable.

#### Scenario: Visitor reads the privacy policy
- **WHEN** a visitor navigates to `/privacy`
- **THEN** all listed sections are present and the on-device SMS processing,
  no-tracking, and no-data-selling statements are visible in the text

### Requirement: Support page
The system SHALL provide a `/support` route containing a FAQ covering
permissions, backup, restore, SMS detection, and Gmail sync, plus a visible
contact email address for support requests.

#### Scenario: Visitor looks for help
- **WHEN** a visitor navigates to `/support`
- **THEN** the FAQ entries for permissions, backup, restore, SMS detection,
  and Gmail sync are visible, and a contact email is displayed as a mailto
  link

### Requirement: Terms of Service page
The system SHALL provide a `/terms` route containing standard terms of use:
disclaimer, license, user responsibilities, no-warranty statement, and
limitation of liability.

#### Scenario: Visitor reads the terms
- **WHEN** a visitor navigates to `/terms`
- **THEN** all five required sections are present in the rendered content

### Requirement: 404 fallback
The system SHALL render a dedicated not-found page for any URL that does not
match `/`, `/privacy`, `/support`, or `/terms`, offering a link back to the
homepage.

#### Scenario: Visitor hits an unknown URL
- **WHEN** a visitor navigates to an undefined path such as `/foo`
- **THEN** the 404 page is rendered instead of a blank page or router error,
  and a link back to `/` is present
