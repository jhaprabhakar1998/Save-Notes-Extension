# Save-Notes-Chrome-Extension

# Developer's Note

So, here we are using local storage for storing the data. If you delete the extension all the key value pairs stored for this extension will be deleted.
Also, know that for local storage there is a limit of 5MB. After that you will be getting an error. Also Data is not encrypted. If you want to make your notes available across all your devices replace local with sync in the chrome storage APIs. You are free to make any changes and if you find any issue or bugs please let me know. Also note that there is a lot of DOM manipulation so be careful while making changes with DOM without properly understanding the flow.

# Using this Extension

First Download or Clone the Repo and then follow below steps- 

To load your extension in Chrome, open up [Extension](chrome://extensions/) in your browser and click “Developer mode” in the top right. Now click “Load unpacked extension…” and select the extension’s directory. You should now see your extension in the list.

After this you can save your notes by cliking on save button and also view all the saved contents. After clicking on View Submitted Content button you will be seeing all the notes and a copy button and delete button on the side of Notes title and on clicking it will do their mentioned jobs.

# Features

You can save notes with a title and content. The time will also be shown when you have saved the note. You can also delete the note any time. Deleting a note is an irreversible process, you can not recover it. Also a copy button is there which copies the contents of a note.

# Upcoming Feature

For now, I don't think that we need an Update feature as the notes are mostly not edited in general. But yes in upcoming versions we can have this and it will Follow all CRUD operations. 