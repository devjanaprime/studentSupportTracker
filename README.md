Student Support Tracker
===

Description:
---
Create a subject and time tracker. 

Version 1.0: 

- users can log in with @primeacademy.io email

![Login Page](./images/SSTLoginPage.png)


- users will be able to view upcoming events and event details


![Landing Page](./images/SSTLandingPage.png)


![Event Detail Page](./images/SSTEventDetails.png)


- users will be able to submit a new Event

![Add Event Page](./images/SSTAddEvent.png)

![Event Success](./images/SSTEventSuccess.png)

![Event Error](./images/SSTEventError.png)

- users will be able to add attendees for Events and view who has signed up to attend

![Add Attendees](./images/SSTAddAttendees.png)

![Attendees Success](./images/SSTAttendeeSuccess.png)

![Attendees Error](./images/SSTAttendeeError.png)

![Attendees List](./images/SSTAttendeesList.png)

- users will be able to add Categories
- basic report that lists all Events
- filter said list by user
- filter said list by category

![Reporting Page](./images/SSTReporting.png)

Version 2.0:
- filter report by multiple users &/or categories
- visual representation via bar charts/pie graphs/etc.
- set start/end date for reports (default of all for current year)

Tech:
---

- HTML
- Angular Material
- CSS/Sass
- JS
- AngularJS
- SQL
- Node
- Express

Tables:
---

Categories:

- id
- name

Events:

- id
- user
- category_id
- dateTime
- hours
- students_in_attendance

