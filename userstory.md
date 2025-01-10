## Value Proposition

As a user  
I want a consistent and intuitive interface across related pages  
In order to easily view and edit game details without confusion.

## Description

![Screenshot 2025-01-06 130217](https://github.com/user-attachments/assets/13d70467-abdd-4308-b2d9-d2f884ef741d)

![Screenshot 2025-01-06 130322](https://github.com/user-attachments/assets/2ab6b890-23fa-49a3-b064-b6caba4a3337)

- The application design will feature:
  - A small, consistent color palette (primary, secondary, accent, and neutral shades).
  - Two fonts: one for headings and another for body text.
  - A global padding value applied uniformly across all components.
- Rearrangement of visual items will be applied to:
  - **`add-game/index.jsx`**: Ensure intuitive placement of form fields and clear call-to-action buttons.
  - **`/[gameId]/index.jsx`**: Create a clean, visually appealing layout for viewing game details, with actions like edit or delete easily accessible. The layout should align closely with `[gameId]/edit/index.jsx` for consistency.
  - **`[gameId]/edit/index.jsx`**: Arrange form fields in a logical sequence for editing game details. The layout should mirror `/[gameId]/index.jsx` to maintain a consistent user experience.
- The title "Game Flow" will be removed from `/index.jsx` to streamline the interface and avoid unnecessary elements.
- The design will prioritize modern, minimalistic aesthetics with a responsive layout.

## Acceptance Criteria

- [ ] The color palette is defined with a small set of harmonious colors.
- [ ] Two fonts are chosen to complement each other.
- [ ] A global padding value is consistently applied across all pages and components.
- [ ] The layout of `add-game/index.jsx` allows users to intuitively add new games.
- [ ] The layout of `/[gameId]/index.jsx` organizes game details in a visually appealing way, aligned with `[gameId]/edit/index.jsx`.
- [ ] The layout of `[gameId]/edit/index.jsx` mirrors `/[gameId]/index.jsx` with minimal variations for editing purposes.
- [ ] The title "Game Flow" is removed from `/index.jsx`.
- [ ] The design is responsive.

## Tasks

- [ ] Define the primary, secondary, accent, and neutral colors for the palette.
- [ ] Choose and import two fonts, setting font styles for headings and body text.
- [ ] Create a global CSS or styles file to define global padding, spacing, and typography.
- [ ] Redesign the `add-game/index.jsx` layout for form usability and intuitive navigation.
- [ ] Design `/[gameId]/index.jsx` and `[gameId]/edit/index.jsx` with consistent layouts, ensuring easy access to actions and logical form arrangements.
- [ ] Remove the title "Game Flow" from `/index.jsx`.
- [ ] Implement a responsive grid or layout system for all pages.
