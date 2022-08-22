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
 remove amount textbox 

            DONE
 remove datepicker 

            DONE
 adding addPhrase and removePhrase actions to topics actions 

            DONE
 working on phrase list item

            DONE
 PhraseListFilters
        incase i want to filter phrases differently (number of times used)

            DONE
 lets try a PhraseDashboardPage
i have it imported and created a route in appRouter

working on editPhrase page,

    ! PhraseForm is next

I want to be able to add multiple phrases to a topic(note currently)

    > copied TopicList and renanmed it PhraseList in components
Next I want to turn them into links that adds the Phrase to the text area

need to create phrases in selectors

    DONE

now to create a phrases reducer

    DONE

adding phrases to configureStore

    DONE

setting up link TopicListItem component

changing instances of [description, note] to [topic, phrase]

I want to see the phrases in the edit topic page

I want an edit phrase page when the phrase is selected from the 

Instead of replaceing a note when one is added with the edit topic page, I want to add another note (phrase)


    Add Topic Page
        - remove amount textbox DONE
        - remove datepicker DONE

    Add Phrase Page

    Edit Phrase Page
        ? might not need, should be able to handle this with the Edit topic page thats already in place
creating 

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
            * filter redusers default state
            * removed amount from topics.js
            
At this point the datepicker, and amount are nowhere to be found and the app is otherwise running as expected


