<!-- Features
            User can choose an author
            Given a pen pal wants to send a letter
            When the Pen Pal app loads
            Then there should be a select element that displays all pen pals to choose for the author

            User can choose an recipient
            Given a pen pal wants to send a letter
            When the Pen Pal app loads
            Then there should be a select element that displays all pen pals to choose for the recipient

            User can choose a letter topic
            Given a pen pal wants to send a letter
            When the Pen Pal app loads
            Then there should be a group of radio buttons for the user to choose a topic

            User can enter the letter body
            Given a pen pal wants to send a letter
            When the Pen Pal app loads
            Then there should be textarea element in which the user can type in the letter body

            User can save letter
            Given a pen pal wants to send a letter
            When the Pen Pal app loads
            Then there should be button labeled Send at the bottom of the form

Given a pen pal is done writing a letter
When the pal clicks the Send button
Then the letter should be saved in the API database
And the new letter should immediately be rendered in the list of letters below the form
And the rendered letter should display the following information

author
recipient
date sent
email address of author/recipient
topic of letter -->