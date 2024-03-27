# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Intern Assignments

1. Create a Task Tracker web app for a team in an organization using React.
   a) A task will have following properties :

i. Title
ii. Description
iii. Start Date (this date will be same as task created date)
iv. End date (only present in tasks marked as Completed)
v. Status (possible status states are) 1. Pending 2. In Progress 3. Completed 4. Deployed 5. Deferred
vi. Assignee (task owner)
vii. Priority (P0 / P1 / P2 )

Each task status should have a column of its own. We should be able to sort the tasks by Priority and start date / end date.
We should be able to Filter tasks based on Date range (task created date from and to range) / Assignee / Priority. We should be able to apply these filters in multiple combinations for eg, filter tasks which are assigned to John Doe(Assignee) that are of P1 priority.

## Note -

Web Page should be responsive. Use your creativity to design the web application.
A user should be able to add/delete tasks. (Completed tasks cannot be deleted)
If you know ReactNative, flaunt your app development skills by make Android | iOS app

## Submission Guidelines:

--> Build an executable ReactJs (plus ReactNative) application project and share steps to run the project
--> Use in memory state management for storing data
--> Follow good coding practices and use comments wherever necessary
--> List down any assumptions you make while designing
Perform error handling
--> If you are developing both projects, share code by uploading in public GIT repository
