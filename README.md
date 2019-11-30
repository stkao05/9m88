## Note on page update

The site has dynamic data - the touring info, and it is managed in [this Google spreadsheet](https://docs.google.com/spreadsheets/d/1JKMsuVMrNNFBKc6x4ob8WG1bCwJ_GF5dUUmOioqX8x8/edit#gid=0).

The site update workflow:

- When spreadsheet data is updated, the Github Workflow is triggered (done by IFTTT)
- Github Workflow fetch the spreadsheet data, and build the site with latest data. Lastly it commits the result of the build.
- Github Page updates as result of the build commit, and the production site now has the latest data

