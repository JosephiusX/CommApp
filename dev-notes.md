setup phrases actions : Add, Remove, Edit.

    ? May simplify to just add and remove
    * 

WHAT I GOT:

Topics Page
So far we have a Topics page with the ability to filter through topics via the text box and date-picker simoulteniously. Or instead of date we can toggle from date to ammount, organizing the filterd text from greatist amount to lowest.  If availabile topics appear as links within TopicList component. 

Edit Topic Page
Clicking links takes in Topics page directs me to the edit page for topic clicked. I can edit all parameters: topic, price, date, note. I can add topic to make changes or i can remove topic. 

Add Topic Page
currently we must add description and amount, the date is set automatically, and we have the option to add a note. When Add Topic puttion is selected with nessessary fields completed we are redirected to topics page where we can see the new topic

Help Page
Nada. just a location for right now. 


WHAT I WANT: 

    Topics Page
        - remove dropdown box and datepicker
Well keep the textbox for filtering our topics

        - topic link directs to Edit topic page. 

    Edit Topic Page
        - remove amount textbox
        - remove datepicker

    Add Topic Page

    Add Phrase Page

    Edit Phrase Page

currently working on removing the datepicker

        i have removed everything i could find from topic form component but html elements
        ? where else could it be hideing
            * found instances on topics selectors
        ? ''
            * its passed into topicListItem component
        ? ''
            * topicsListFilters component
        ? ''
            * topicForm component
        ? ''
