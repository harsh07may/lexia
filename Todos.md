# Steps taken

1. Built a custom Button Library using shadcn.

   - Using a border-bottom > other borders to give 3D effect.

2. Add Basic Auth with Clerk.com

   - Use SignedIn, SignedOut, Loading & Auth-state Buttons.
   - Create a re-usable header.

3. Add a HomePage that handles the authenticated state.

   - Create a marketing route group with a layout.
   - Create a footer with flags-icons fromFlagpack.

4. Create a LearnPage for signed in users.

   - Create a main route group with a layout.
   - Create a sidebar and a mobile-nav.

5. Create the Actual Learn Page

   - Create a FeedWrapper thats a scrollable wrapper.
   - Create a Sticky Wrapper that will be fixed even when Feed is scrolled.
   - Create a header for Learn(main) page which will contain Hearts, Energy etc.

6. Create and Connect to the db
   - Create a serverless db using Neon.
   - Install Drizzle orm and connect to the db.
